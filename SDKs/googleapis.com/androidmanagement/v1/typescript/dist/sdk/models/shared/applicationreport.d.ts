import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationEvent } from "./applicationevent";
import { KeyedAppState } from "./keyedappstate";
/**
 * The source of the package.
 */
export declare enum ApplicationReportApplicationSourceEnum {
    ApplicationSourceUnspecified = "APPLICATION_SOURCE_UNSPECIFIED",
    SystemAppFactoryVersion = "SYSTEM_APP_FACTORY_VERSION",
    SystemAppUpdatedVersion = "SYSTEM_APP_UPDATED_VERSION",
    InstalledFromPlayStore = "INSTALLED_FROM_PLAY_STORE"
}
/**
 * Application state.
 */
export declare enum ApplicationReportStateEnum {
    ApplicationStateUnspecified = "APPLICATION_STATE_UNSPECIFIED",
    Removed = "REMOVED",
    Installed = "INSTALLED"
}
/**
 * Information reported about an installed app.
 */
export declare class ApplicationReport extends SpeakeasyBase {
    /**
     * The source of the package.
     */
    applicationSource?: ApplicationReportApplicationSourceEnum;
    /**
     * The display name of the app.
     */
    displayName?: string;
    /**
     * The list of app events which have occurred in the last 30 hours.
     */
    events?: ApplicationEvent[];
    /**
     * The package name of the app that installed this app.
     */
    installerPackageName?: string;
    /**
     * List of keyed app states reported by the app.
     */
    keyedAppStates?: KeyedAppState[];
    /**
     * Package name of the app.
     */
    packageName?: string;
    /**
     * The SHA-256 hash of the app's APK file, which can be used to verify the app hasn't been modified. Each byte of the hash value is represented as a two-digit hexadecimal number.
     */
    packageSha256Hash?: string;
    /**
     * The SHA-1 hash of each android.content.pm.Signature (https://developer.android.com/reference/android/content/pm/Signature.html) associated with the app package. Each byte of each hash value is represented as a two-digit hexadecimal number.
     */
    signingKeyCertFingerprints?: string[];
    /**
     * Application state.
     */
    state?: ApplicationReportStateEnum;
    /**
     * The app version code, which can be used to determine whether one version is more recent than another.
     */
    versionCode?: number;
    /**
     * The app version as displayed to the user.
     */
    versionName?: string;
}
