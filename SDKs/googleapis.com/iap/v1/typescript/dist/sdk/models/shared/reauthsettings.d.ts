import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reauth method requested.
 */
export declare enum ReauthSettingsMethodEnum {
    MethodUnspecified = "METHOD_UNSPECIFIED",
    Login = "LOGIN",
    Password = "PASSWORD",
    SecureKey = "SECURE_KEY",
    EnrolledSecondFactors = "ENROLLED_SECOND_FACTORS"
}
/**
 * How IAP determines the effective policy in cases of hierarchial policies. Policies are merged from higher in the hierarchy to lower in the hierarchy.
 */
export declare enum ReauthSettingsPolicyTypeEnum {
    PolicyTypeUnspecified = "POLICY_TYPE_UNSPECIFIED",
    Minimum = "MINIMUM",
    Default = "DEFAULT"
}
/**
 * Configuration for IAP reauthentication policies.
 */
export declare class ReauthSettings extends SpeakeasyBase {
    /**
     * Reauth session lifetime, how long before a user has to reauthenticate again.
     */
    maxAge?: string;
    /**
     * Reauth method requested.
     */
    method?: ReauthSettingsMethodEnum;
    /**
     * How IAP determines the effective policy in cases of hierarchial policies. Policies are merged from higher in the hierarchy to lower in the hierarchy.
     */
    policyType?: ReauthSettingsPolicyTypeEnum;
}
