import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deprecated, use trackId instead.
 */
export declare enum AppVersionTrackEnum {
    AppTrackUnspecified = "appTrackUnspecified",
    Production = "production",
    Beta = "beta",
    Alpha = "alpha"
}
/**
 * This represents a single version of the app.
 */
export declare class AppVersion extends SpeakeasyBase {
    /**
     * True if this version is a production APK.
     */
    isProduction?: boolean;
    /**
     * Deprecated, use trackId instead.
     */
    track?: AppVersionTrackEnum;
    /**
     * Track ids that the app version is published in. Replaces the track field (deprecated), but doesn't include the production track (see isProduction instead).
     */
    trackId?: string[];
    /**
     * Unique increasing identifier for the app version.
     */
    versionCode?: number;
    /**
     * The string used in the Play store by the app developer to identify the version. The string is not necessarily unique or localized (for example, the string could be "1.4").
     */
    versionString?: string;
}
