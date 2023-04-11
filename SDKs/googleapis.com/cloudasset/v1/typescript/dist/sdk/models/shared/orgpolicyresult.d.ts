import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicy } from "./analyzerorgpolicy";
/**
 * The organization policy result to the query.
 */
export declare class OrgPolicyResult extends SpeakeasyBase {
    /**
     * This organization policy message is a modified version of the one defined in the Organization Policy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose.
     */
    consolidatedPolicy?: AnalyzerOrgPolicy;
    /**
     * The ordered list of all organization policies from the AnalyzeOrgPoliciesResponse.OrgPolicyResult.consolidated_policy.attached_resource. to the scope specified in the request. If the constraint is defined with default policy, it will also appear in the list.
     */
    policyBundle?: AnalyzerOrgPolicy[];
}
