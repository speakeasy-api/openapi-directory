import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig } from "./securitypolicyadaptiveprotectionconfiglayer7ddosdefenseconfig";
/**
 * Configuration options for Cloud Armor Adaptive Protection (CAAP).
 */
export declare class SecurityPolicyAdaptiveProtectionConfig extends SpeakeasyBase {
    /**
     * Configuration options for L7 DDoS detection.
     */
    layer7DdosDefenseConfig?: SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
}
