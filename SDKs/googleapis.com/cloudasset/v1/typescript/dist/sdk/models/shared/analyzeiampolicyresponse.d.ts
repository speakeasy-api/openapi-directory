import { SpeakeasyBase } from "../../../internal/utils";
import { IamPolicyAnalysis } from "./iampolicyanalysis";
/**
 * A response message for AssetService.AnalyzeIamPolicy.
 */
export declare class AnalyzeIamPolicyResponse extends SpeakeasyBase {
    /**
     * Represents whether all entries in the main_analysis and service_account_impersonation_analysis have been fully explored to answer the query in the request.
     */
    fullyExplored?: boolean;
    /**
     * An analysis message to group the query and results.
     */
    mainAnalysis?: IamPolicyAnalysis;
    /**
     * The service account impersonation analysis if AnalyzeIamPolicyRequest.analyze_service_account_impersonation is enabled.
     */
    serviceAccountImpersonationAnalysis?: IamPolicyAnalysis[];
}
