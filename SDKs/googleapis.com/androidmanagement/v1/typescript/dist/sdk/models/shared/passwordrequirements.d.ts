import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The required password quality.
 */
export declare enum PasswordRequirementsPasswordQualityEnum {
    PasswordQualityUnspecified = "PASSWORD_QUALITY_UNSPECIFIED",
    BiometricWeak = "BIOMETRIC_WEAK",
    Something = "SOMETHING",
    Numeric = "NUMERIC",
    NumericComplex = "NUMERIC_COMPLEX",
    Alphabetic = "ALPHABETIC",
    Alphanumeric = "ALPHANUMERIC",
    Complex = "COMPLEX",
    ComplexityLow = "COMPLEXITY_LOW",
    ComplexityMedium = "COMPLEXITY_MEDIUM",
    ComplexityHigh = "COMPLEXITY_HIGH"
}
/**
 * The scope that the password requirement applies to.
 */
export declare enum PasswordRequirementsPasswordScopeEnum {
    ScopeUnspecified = "SCOPE_UNSPECIFIED",
    ScopeDevice = "SCOPE_DEVICE",
    ScopeProfile = "SCOPE_PROFILE"
}
/**
 * The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile.
 */
export declare enum PasswordRequirementsRequirePasswordUnlockEnum {
    RequirePasswordUnlockUnspecified = "REQUIRE_PASSWORD_UNLOCK_UNSPECIFIED",
    UseDefaultDeviceTimeout = "USE_DEFAULT_DEVICE_TIMEOUT",
    RequireEveryDay = "REQUIRE_EVERY_DAY"
}
/**
 * Controls whether a unified lock is allowed for the device and the work profile, on devices running Android 9 and above with a work profile. This can be set only if password_scope is set to SCOPE_PROFILE, the policy will be rejected otherwise. If user has not set a separate work lock and this field is set to REQUIRE_SEPARATE_WORK_LOCK, a NonComplianceDetail is reported with nonComplianceReason set to USER_ACTION.
 */
export declare enum PasswordRequirementsUnifiedLockSettingsEnum {
    UnifiedLockSettingsUnspecified = "UNIFIED_LOCK_SETTINGS_UNSPECIFIED",
    AllowUnifiedWorkAndPersonalLock = "ALLOW_UNIFIED_WORK_AND_PERSONAL_LOCK",
    RequireSeparateWorkLock = "REQUIRE_SEPARATE_WORK_LOCK"
}
/**
 * Requirements for the password used to unlock a device.
 */
export declare class PasswordRequirements extends SpeakeasyBase {
    /**
     * Number of incorrect device-unlock passwords that can be entered before a device is wiped. A value of 0 means there is no restriction.
     */
    maximumFailedPasswordsForWipe?: number;
    /**
     * Password expiration timeout.
     */
    passwordExpirationTimeout?: string;
    /**
     * The length of the password history. After setting this field, the user won't be able to enter a new password that is the same as any password in the history. A value of 0 means there is no restriction.
     */
    passwordHistoryLength?: number;
    /**
     * The minimum allowed password length. A value of 0 means there is no restriction. Only enforced when password_quality is NUMERIC, NUMERIC_COMPLEX, ALPHABETIC, ALPHANUMERIC, or COMPLEX.
     */
    passwordMinimumLength?: number;
    /**
     * Minimum number of letters required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumLetters?: number;
    /**
     * Minimum number of lower case letters required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumLowerCase?: number;
    /**
     * Minimum number of non-letter characters (numerical digits or symbols) required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumNonLetter?: number;
    /**
     * Minimum number of numerical digits required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumNumeric?: number;
    /**
     * Minimum number of symbols required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumSymbols?: number;
    /**
     * Minimum number of upper case letters required in the password. Only enforced when password_quality is COMPLEX.
     */
    passwordMinimumUpperCase?: number;
    /**
     * The required password quality.
     */
    passwordQuality?: PasswordRequirementsPasswordQualityEnum;
    /**
     * The scope that the password requirement applies to.
     */
    passwordScope?: PasswordRequirementsPasswordScopeEnum;
    /**
     * The length of time after a device or work profile is unlocked using a strong form of authentication (password, PIN, pattern) that it can be unlocked using any other authentication method (e.g. fingerprint, trust agents, face). After the specified time period elapses, only strong forms of authentication can be used to unlock the device or work profile.
     */
    requirePasswordUnlock?: PasswordRequirementsRequirePasswordUnlockEnum;
    /**
     * Controls whether a unified lock is allowed for the device and the work profile, on devices running Android 9 and above with a work profile. This can be set only if password_scope is set to SCOPE_PROFILE, the policy will be rejected otherwise. If user has not set a separate work lock and this field is set to REQUIRE_SEPARATE_WORK_LOCK, a NonComplianceDetail is reported with nonComplianceReason set to USER_ACTION.
     */
    unifiedLockSettings?: PasswordRequirementsUnifiedLockSettingsEnum;
}
