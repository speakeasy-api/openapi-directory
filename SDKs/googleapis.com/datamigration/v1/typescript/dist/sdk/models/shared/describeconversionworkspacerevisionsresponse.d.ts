import { SpeakeasyBase } from "../../../internal/utils";
import { ConversionWorkspace } from "./conversionworkspace";
/**
 * Response message for 'DescribeConversionWorkspaceRevisions' request.
 */
export declare class DescribeConversionWorkspaceRevisionsResponse extends SpeakeasyBase {
    /**
     * The list of conversion workspace revisions.
     */
    revisions?: ConversionWorkspace[];
}
