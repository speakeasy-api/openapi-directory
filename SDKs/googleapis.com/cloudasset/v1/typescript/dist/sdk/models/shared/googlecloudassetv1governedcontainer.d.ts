import { SpeakeasyBase } from "../../../internal/utils";
import { AnalyzerOrgPolicy } from "./analyzerorgpolicy";
/**
 * The organization/folder/project resource governed by organization policies of AnalyzeOrgPolicyGovernedContainersRequest.constraint.
 */
export declare class GoogleCloudAssetV1GovernedContainer extends SpeakeasyBase {
    /**
     * This organization policy message is a modified version of the one defined in the Organization Policy system. This message contains several fields defined in the original organization policy with some new fields for analysis purpose.
     */
    consolidatedPolicy?: AnalyzerOrgPolicy;
    /**
     * The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of an organization/folder/project resource.
     */
    fullResourceName?: string;
    /**
     * The [full resource name] (https://cloud.google.com/asset-inventory/docs/resource-name-format) of the parent of AnalyzeOrgPolicyGovernedContainersResponse.GovernedContainer.full_resource_name.
     */
    parent?: string;
    /**
     * The ordered list of all organization policies from the AnalyzeOrgPoliciesResponse.OrgPolicyResult.consolidated_policy.attached_resource. to the scope specified in the request. If the constraint is defined with default policy, it will also appear in the list.
     */
    policyBundle?: AnalyzerOrgPolicy[];
}
