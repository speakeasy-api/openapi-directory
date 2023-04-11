import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest } from "./googlechromepolicyversionsv1deletegrouppolicyrequest";
/**
 * Request message for specifying that multiple policy values will be deleted.
 */
export declare class GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest extends SpeakeasyBase {
    /**
     * List of policies that will be deleted as defined by the `requests`. All requests in the list must follow these restrictions: 1. All schemas in the list must have the same root namespace. 2. All `policyTargetKey.targetResource` values must point to a group resource. 3. All `policyTargetKey` values must have the same `app_id` key name in the `additionalTargetKeys`. 4. No two modification requests can reference the same `policySchema` + ` policyTargetKey` pair.
     */
    requests?: GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest[];
}
