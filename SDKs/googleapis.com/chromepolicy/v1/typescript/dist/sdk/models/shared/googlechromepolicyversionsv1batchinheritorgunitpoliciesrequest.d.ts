import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest } from "./googlechromepolicyversionsv1inheritorgunitpolicyrequest";
/**
 * Request message for specifying that multiple policy values inherit their value from their parents.
 */
export declare class GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest extends SpeakeasyBase {
    /**
     * List of policies that have to inherit their values as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to an org unit resource. 3. All `policyTargetKey` values must have the same key names in the ` additionalTargetKeys`. This also means if one of the targets has an empty `additionalTargetKeys` map, all of the targets must have an empty `additionalTargetKeys` map. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest[];
}
