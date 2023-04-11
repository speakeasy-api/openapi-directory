import { SpeakeasyBase } from "../../../internal/utils";
import { ConversionWorkspace } from "./conversionworkspace";
/**
 * Response message for 'ListConversionWorkspaces' request.
 */
export declare class ListConversionWorkspacesResponse extends SpeakeasyBase {
    /**
     * The list of conversion workspace objects.
     */
    conversionWorkspaces?: ConversionWorkspace[];
    /**
     * A token which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
}
