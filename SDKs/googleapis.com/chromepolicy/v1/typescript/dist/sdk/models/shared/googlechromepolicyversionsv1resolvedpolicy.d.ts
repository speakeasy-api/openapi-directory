import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleChromePolicyVersionsV1PolicyTargetKey } from "./googlechromepolicyversionsv1policytargetkey";
import { GoogleChromePolicyVersionsV1PolicyValue } from "./googlechromepolicyversionsv1policyvalue";
/**
 * The resolved value of a policy for a given target.
 */
export declare class GoogleChromePolicyVersionsV1ResolvedPolicy extends SpeakeasyBase {
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    addedSourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    sourceKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
    /**
     * The key used to identify the target on which the policy will be applied.
     */
    targetKey?: GoogleChromePolicyVersionsV1PolicyTargetKey;
    /**
     * A particular value for a policy managed by the service.
     */
    value?: GoogleChromePolicyVersionsV1PolicyValue;
}
