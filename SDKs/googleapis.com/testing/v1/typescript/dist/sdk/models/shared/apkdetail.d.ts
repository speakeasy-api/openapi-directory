import { SpeakeasyBase } from "../../../internal/utils";
import { ApkManifest } from "./apkmanifest";
/**
 * Android application details based on application manifest and apk archive contents.
 */
export declare class ApkDetail extends SpeakeasyBase {
    /**
     * An Android app manifest. See http://developer.android.com/guide/topics/manifest/manifest-intro.html
     */
    apkManifest?: ApkManifest;
}
