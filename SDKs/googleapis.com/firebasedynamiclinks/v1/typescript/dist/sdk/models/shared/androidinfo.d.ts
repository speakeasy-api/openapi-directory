import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Android related attributes to the Dynamic Link.
 */
export declare class AndroidInfo extends SpeakeasyBase {
    /**
     * Link to open on Android if the app is not installed.
     */
    androidFallbackLink?: string;
    /**
     * If specified, this overrides the ‘link’ parameter on Android.
     */
    androidLink?: string;
    /**
     * Minimum version code for the Android app. If the installed app’s version code is lower, then the user is taken to the Play Store.
     */
    androidMinPackageVersionCode?: string;
    /**
     * Android package name of the app.
     */
    androidPackageName?: string;
}
