import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Android app information.
 */
export declare class AndroidAppInfo extends SpeakeasyBase {
    /**
     * The name of the app. Optional
     */
    name?: string;
    /**
     * The package name of the app. Required.
     */
    packageName?: string;
    /**
     * The internal version code of the app. Optional.
     */
    versionCode?: string;
    /**
     * The version name of the app. Optional.
     */
    versionName?: string;
}
