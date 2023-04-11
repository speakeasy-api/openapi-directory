import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Device attested key trust level.
 */
export declare enum VerifyChallengeResponseResultKeyTrustLevelEnum {
    KeyTrustLevelUnspecified = "KEY_TRUST_LEVEL_UNSPECIFIED",
    ChromeOsVerifiedMode = "CHROME_OS_VERIFIED_MODE",
    ChromeOsDeveloperMode = "CHROME_OS_DEVELOPER_MODE",
    ChromeBrowserHwKey = "CHROME_BROWSER_HW_KEY",
    ChromeBrowserOsKey = "CHROME_BROWSER_OS_KEY"
}
/**
 * Result message for VerifiedAccess.VerifyChallengeResponse.
 */
export declare class VerifyChallengeResponseResult extends SpeakeasyBase {
    /**
     * Unique customer id that this device belongs to, as defined by the Google Admin SDK at https://developers.google.com/admin-sdk/directory/v1/guides/manage-customers
     */
    customerId?: string;
    /**
     * Device permanent id is returned in this field (for the machine response only).
     */
    devicePermanentId?: string;
    /**
     * Device signal in json string representation.
     */
    deviceSignal?: string;
    /**
     * Device attested key trust level.
     */
    keyTrustLevel?: VerifyChallengeResponseResultKeyTrustLevelEnum;
    /**
     * Certificate Signing Request (in the SPKAC format, base64 encoded) is returned in this field. This field will be set only if device has included CSR in its challenge response. (the option to include CSR is now available for both user and machine responses)
     */
    signedPublicKeyAndChallenge?: string;
    /**
     * Virtual device id of the device. The definition of virtual device id is platform-specific.
     */
    virtualDeviceId?: string;
}
