import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";
/**
 * A Google Cloud resource under analysis.
 */
export declare class GoogleCloudAssetV1p4beta1Resource extends SpeakeasyBase {
    /**
     * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
     */
    analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;
    /**
     * The [full resource name](https://cloud.google.com/asset-inventory/docs/resource-name-format)
     */
    fullResourceName?: string;
}
