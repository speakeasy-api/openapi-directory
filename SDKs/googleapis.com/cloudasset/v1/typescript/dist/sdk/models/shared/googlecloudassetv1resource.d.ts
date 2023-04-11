import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";
/**
 * A Google Cloud resource under analysis.
 */
export declare class GoogleCloudAssetV1Resource extends SpeakeasyBase {
    /**
     * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
     */
    analysisState?: IamPolicyAnalysisState;
    /**
     * The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format)
     */
    fullResourceName?: string;
}
