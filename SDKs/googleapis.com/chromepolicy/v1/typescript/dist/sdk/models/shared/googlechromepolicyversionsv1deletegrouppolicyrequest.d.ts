import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request parameters for deleting the policy value of a specific group target.
 */
export declare class GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest extends SpeakeasyBase {
    /**
     * The fully qualified name of the policy schema that is being inherited.
     */
    policySchema?: string;
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
