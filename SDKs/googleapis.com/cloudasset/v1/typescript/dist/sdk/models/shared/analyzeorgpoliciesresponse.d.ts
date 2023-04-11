import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicyConstraint } from "./analyzerorgpolicyconstraint";
import { OrgPolicyResult } from "./orgpolicyresult";
/**
 * The response message for AssetService.AnalyzeOrgPolicies.
 */
export declare class AnalyzeOrgPoliciesResponse extends SpeakeasyBase {
    /**
     * The organization policy constraint definition.
     */
    constraint?: AnalyzerOrgPolicyConstraint;
    /**
     * The page token to fetch the next page for AnalyzeOrgPoliciesResponse.org_policy_results.
     */
    nextPageToken?: string;
    /**
     * The organization policies under the AnalyzeOrgPoliciesRequest.scope with the AnalyzeOrgPoliciesRequest.constraint.
     */
    orgPolicyResults?: OrgPolicyResult[];
}
