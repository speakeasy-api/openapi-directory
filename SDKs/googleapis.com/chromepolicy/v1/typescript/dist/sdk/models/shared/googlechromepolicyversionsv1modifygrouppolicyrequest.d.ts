import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyValue } from "./googlechromepolicyversionsv1policyvalue";
/**
 * Request parameters for modifying a policy value for a specific group target.
 */
export declare class GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest extends SpeakeasyBase {
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
    /**
     * A particular value for a policy managed by the service.
     */
    policyValue?: GoogleChromePolicyVersionsV1PolicyValue;
    /**
     * Required. Policy fields to update. Only fields in this mask will be updated; other fields in `policy_value` will be ignored (even if they have values). If a field is in this list it must have a value in 'policy_value'.
     */
    updateMask?: string;
}
