import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encryption status from DevicePolicyManager.
 */
export declare enum DeviceSettingsEncryptionStatusEnum {
    EncryptionStatusUnspecified = "ENCRYPTION_STATUS_UNSPECIFIED",
    Unsupported = "UNSUPPORTED",
    Inactive = "INACTIVE",
    Activating = "ACTIVATING",
    Active = "ACTIVE",
    ActiveDefaultKey = "ACTIVE_DEFAULT_KEY",
    ActivePerUser = "ACTIVE_PER_USER"
}
/**
 * Information about security related device settings on device.
 */
export declare class DeviceSettings extends SpeakeasyBase {
    /**
     * Whether ADB (https://developer.android.com/studio/command-line/adb.html) is enabled on the device.
     */
    adbEnabled?: boolean;
    /**
     * Whether developer mode is enabled on the device.
     */
    developmentSettingsEnabled?: boolean;
    /**
     * Encryption status from DevicePolicyManager.
     */
    encryptionStatus?: DeviceSettingsEncryptionStatusEnum;
    /**
     * Whether the device is secured with PIN/password.
     */
    isDeviceSecure?: boolean;
    /**
     * Whether the storage encryption is enabled.
     */
    isEncrypted?: boolean;
    /**
     * Whether installing apps from unknown sources is enabled.
     */
    unknownSourcesEnabled?: boolean;
    /**
     * Whether Google Play Protect verification (https://support.google.com/accounts/answer/2812853) is enforced on the device.
     */
    verifyAppsEnabled?: boolean;
}
