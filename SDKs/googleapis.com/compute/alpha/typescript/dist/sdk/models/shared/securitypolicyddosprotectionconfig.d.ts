import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SecurityPolicyDdosProtectionConfigDdosProtectionEnum {
    Advanced = "ADVANCED",
    AdvancedPreview = "ADVANCED_PREVIEW",
    Standard = "STANDARD"
}
export declare class SecurityPolicyDdosProtectionConfig extends SpeakeasyBase {
    ddosProtection?: SecurityPolicyDdosProtectionConfigDdosProtectionEnum;
}
