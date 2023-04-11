import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysisState } from "./iampolicyanalysisstate";
/**
 * An IAM role or permission under analysis.
 */
export declare class GoogleCloudAssetV1Access extends SpeakeasyBase {
    /**
     * Represents the detailed state of an entity under analysis, such as a resource, an identity or an access.
     */
    analysisState?: IamPolicyAnalysisState;
    /**
     * The permission.
     */
    permission?: string;
    /**
     * The role.
     */
    role?: string;
}
