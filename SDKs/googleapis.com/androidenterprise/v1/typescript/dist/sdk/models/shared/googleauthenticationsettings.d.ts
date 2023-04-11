import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Whether dedicated devices are allowed.
 */
export declare enum GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum {
    DedicatedDevicesAllowedUnspecified = "dedicatedDevicesAllowedUnspecified",
    Disallowed = "disallowed",
    Allowed = "allowed"
}
/**
 * Whether Google authentication is required.
 */
export declare enum GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum {
    GoogleAuthenticationRequiredUnspecified = "googleAuthenticationRequiredUnspecified",
    NotRequired = "notRequired",
    Required = "required"
}
/**
 * Contains settings for Google-provided user authentication.
 */
export declare class GoogleAuthenticationSettings extends SpeakeasyBase {
    /**
     * Whether dedicated devices are allowed.
     */
    dedicatedDevicesAllowed?: GoogleAuthenticationSettingsDedicatedDevicesAllowedEnum;
    /**
     * Whether Google authentication is required.
     */
    googleAuthenticationRequired?: GoogleAuthenticationSettingsGoogleAuthenticationRequiredEnum;
}
