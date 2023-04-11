import { SpeakeasyBase } from "../../../internal/utils";
import { IntentFilter } from "./intentfilter";
import { Metadata } from "./metadata";
import { UsesFeature } from "./usesfeature";
/**
 * An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
 */
export declare class ApkManifest extends SpeakeasyBase {
    /**
     * User-readable name for the application.
     */
    applicationLabel?: string;
    intentFilters?: IntentFilter[];
    /**
     * Maximum API level on which the application is designed to run.
     */
    maxSDKVersion?: number;
    /**
     * Meta-data tags defined in the manifest.
     */
    metadata?: Metadata[];
    /**
     * Minimum API level required for the application to run.
     */
    minSDKVersion?: number;
    /**
     * Full Java-style package name for this application, e.g. "com.example.foo".
     */
    packageName?: string;
    /**
     * Specifies the API Level on which the application is designed to run.
     */
    targetSDKVersion?: number;
    /**
     * Feature usage tags defined in the manifest.
     */
    usesFeature?: UsesFeature[];
    /**
     * Permissions declared to be used by the application
     */
    usesPermission?: string[];
    /**
     * Version number used internally by the app.
     */
    versionCode?: string;
    /**
     * Version number shown to users.
     */
    versionName?: string;
}
