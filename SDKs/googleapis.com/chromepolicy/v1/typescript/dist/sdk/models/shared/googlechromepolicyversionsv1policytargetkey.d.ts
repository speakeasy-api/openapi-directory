import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The key used to identify the target on which the policy will be applied.
 */
export declare class GoogleChromePolicyVersionsV1PolicyTargetKey extends SpeakeasyBase {
    /**
     * Map containing the additional target key name and value pairs used to further identify the target of the policy.
     */
    additionalTargetKeys?: Record<string, string>;
    /**
     * The target resource on which this policy is applied. The following resources are supported: * Organizational Unit ("orgunits/{orgunit_id}") * Group ("groups/{group_id}")
     */
    targetResource?: string;
}
