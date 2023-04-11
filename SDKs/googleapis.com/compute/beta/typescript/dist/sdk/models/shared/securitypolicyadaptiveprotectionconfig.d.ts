import { SpeakeasyBase } from "../../../internal/utils";
import { SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig } from "./securitypolicyadaptiveprotectionconfigautodeployconfig";
import { SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig } from "./securitypolicyadaptiveprotectionconfiglayer7ddosdefenseconfig";
/**
 * Configuration options for Cloud Armor Adaptive Protection (CAAP).
 */
export declare class SecurityPolicyAdaptiveProtectionConfig extends SpeakeasyBase {
    /**
     * Configuration options for Adaptive Protection auto-deploy feature.
     */
    autoDeployConfig?: SecurityPolicyAdaptiveProtectionConfigAutoDeployConfig;
    /**
     * Configuration options for L7 DDoS detection.
     */
    layer7DdosDefenseConfig?: SecurityPolicyAdaptiveProtectionConfigLayer7DdosDefenseConfig;
}
