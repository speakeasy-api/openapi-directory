import { SpeakeasyBase } from "../../../internal/utils";
import { ExternallyHostedApkUsesPermission } from "./externallyhostedapkusespermission";
/**
 * Defines an APK available for this application that is hosted externally and not uploaded to Google Play. This function is only available to enterprises who are using Google Play for Work, and whos application is restricted to the enterprise private channel
 */
export declare class ExternallyHostedApk extends SpeakeasyBase {
    /**
     * The application label.
     */
    applicationLabel?: string;
    /**
     * A certificate (or array of certificates if a certificate-chain is used) used to signed this APK, represented as a base64 encoded byte array.
     */
    certificateBase64s?: string[];
    /**
     * The URL at which the APK is hosted. This must be an https URL.
     */
    externallyHostedUrl?: string;
    /**
     * The SHA1 checksum of this APK, represented as a base64 encoded byte array.
     */
    fileSha1Base64?: string;
    /**
     * The SHA256 checksum of this APK, represented as a base64 encoded byte array.
     */
    fileSha256Base64?: string;
    /**
     * The file size in bytes of this APK.
     */
    fileSize?: string;
    /**
     * The icon image from the APK, as a base64 encoded byte array.
     */
    iconBase64?: string;
    /**
     * The maximum SDK supported by this APK (optional).
     */
    maximumSDK?: number;
    /**
     * The minimum SDK targeted by this APK.
     */
    minimumSDK?: number;
    /**
     * The native code environments supported by this APK (optional).
     */
    nativeCodes?: string[];
    /**
     * The package name.
     */
    packageName?: string;
    /**
     * The features required by this APK (optional).
     */
    usesFeatures?: string[];
    /**
     * The permissions requested by this APK.
     */
    usesPermissions?: ExternallyHostedApkUsesPermission[];
    /**
     * The version code of this APK.
     */
    versionCode?: number;
    /**
     * The version name of this APK.
     */
    versionName?: string;
}
