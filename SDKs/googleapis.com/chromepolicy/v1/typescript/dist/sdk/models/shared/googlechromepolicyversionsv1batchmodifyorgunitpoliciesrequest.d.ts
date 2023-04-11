import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest } from "./googlechromepolicyversionsv1modifyorgunitpolicyrequest";
/**
 * Request message for modifying multiple policy values for a specific target.
 */
export declare class GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest extends SpeakeasyBase {
    /**
     * List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest[];
}
