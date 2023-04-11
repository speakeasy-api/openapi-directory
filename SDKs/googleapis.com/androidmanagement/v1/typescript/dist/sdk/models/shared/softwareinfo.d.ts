import { SpeakeasyBase } from "../../../internal/utils";
import { SystemUpdateInfo } from "./systemupdateinfo";
/**
 * Information about device software.
 */
export declare class SoftwareInfo extends SpeakeasyBase {
    /**
     * Android build ID string meant for displaying to the user. For example, shamu-userdebug 6.0.1 MOB30I 2756745 dev-keys.
     */
    androidBuildNumber?: string;
    /**
     * Build time.
     */
    androidBuildTime?: string;
    /**
     * The Android Device Policy app version code.
     */
    androidDevicePolicyVersionCode?: number;
    /**
     * The Android Device Policy app version as displayed to the user.
     */
    androidDevicePolicyVersionName?: string;
    /**
     * The user-visible Android version string. For example, 6.0.1.
     */
    androidVersion?: string;
    /**
     * The system bootloader version number, e.g. 0.6.7.
     */
    bootloaderVersion?: string;
    /**
     * SHA-256 hash of android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the system package, which can be used to verify that the system build hasn't been modified.
     */
    deviceBuildSignature?: string;
    /**
     * Kernel version, for example, 2.6.32.9-g103d848.
     */
    deviceKernelVersion?: string;
    /**
     * An IETF BCP 47 language code for the primary locale on the device.
     */
    primaryLanguageCode?: string;
    /**
     * Security patch level, e.g. 2016-05-01.
     */
    securityPatchLevel?: string;
    /**
     * Information about a potential pending system update.
     */
    systemUpdateInfo?: SystemUpdateInfo;
}
