import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Rule visibility can be one of the following: STANDARD - opaque rules. (default) PREMIUM - transparent rules.
 */
export declare enum SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum {
    Premium = "PREMIUM",
    Standard = "STANDARD"
}
/**
 * Configuration options for L7 DDoS detection.
 */
export declare class SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig extends SpeakeasyBase {
    /**
     * If set to true, enables CAAP for L7 DDoS detection.
     */
    enable?: boolean;
    /**
     * Rule visibility can be one of the following: STANDARD - opaque rules. (default) PREMIUM - transparent rules.
     */
    ruleVisibility?: SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfigRuleVisibilityEnum;
}
