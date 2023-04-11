import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p4beta1AnalysisState } from "./googlecloudassetv1p4beta1analysisstate";
/**
 * An IAM role or permission under analysis.
 */
export declare class GoogleCloudAssetV1p4beta1Access extends SpeakeasyBase {
    /**
     * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
     */
    analysisState?: GoogleCloudAssetV1p4beta1AnalysisState;
    /**
     * The permission.
     */
    permission?: string;
    /**
     * The role.
     */
    role?: string;
}
