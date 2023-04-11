import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
/**
 * Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.
 */
export declare class GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest extends SpeakeasyBase {
    /**
     * The fully qualified name of the policy schema that is being inherited.
     */
    policySchema?: string;
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    policyTargetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
}
