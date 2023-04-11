import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a file, used for user inputs.
 */
export declare class FileReference extends SpeakeasyBase {
    /**
     * A path to a file in Google Cloud Storage. Example: gs://build-app-1414623860166/app%40debug-unaligned.apk These paths are expected to be url encoded (percent encoding)
     */
    gcsPath?: string;
}
