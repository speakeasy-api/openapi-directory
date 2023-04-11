import { SpeakeasyBase } from "../../../internal/utils";
import { ApkBinary } from "./apkbinary";
/**
 * Successful response
 */
export declare class Apk extends SpeakeasyBase {
    /**
     * Represents the binary payload of an APK.
     */
    binary?: ApkBinary;
    /**
     * The version code of the APK, as specified in the APK's manifest file.
     */
    versionCode?: number;
}
