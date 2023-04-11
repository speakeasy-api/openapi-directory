import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest } from "./googlechromepolicyversionsv1modifygrouppolicyrequest";
/**
 * Request message for modifying multiple policy values for a specific group-based target.
 */
export declare class GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest extends SpeakeasyBase {
    /**
     * List of policies to modify as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest[];
}
