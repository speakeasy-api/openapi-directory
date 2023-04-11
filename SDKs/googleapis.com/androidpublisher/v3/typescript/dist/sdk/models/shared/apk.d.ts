import { SpeakeasyBase } from "../../../internal/utils";
import { ApkBinary } from "./apkbinary";
/**
 * Information about an APK. The resource for ApksService.
 */
export declare class Apk extends SpeakeasyBase {
    /**
     * Represents the binary payload of an APK.
     */
    binary?: ApkBinary;
    /**
     * The version code of the APK, as specified in the manifest file.
     */
    versionCode?: number;
}
