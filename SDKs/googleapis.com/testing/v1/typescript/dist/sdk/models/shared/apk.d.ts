import { SpeakeasyBase } from "../../../internal/utils";
import { FileReference } from "./filereference";
/**
 * An Android package file to install.
 */
export declare class Apk extends SpeakeasyBase {
    /**
     * A reference to a file, used for user inputs.
     */
    location?: FileReference;
    /**
     * The java package for the APK to be installed. Value is determined by examining the application's manifest.
     */
    packageName?: string;
}
