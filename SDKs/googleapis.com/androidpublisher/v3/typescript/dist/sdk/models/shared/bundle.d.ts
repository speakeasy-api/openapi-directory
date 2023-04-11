import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an app bundle. The resource for BundlesService.
 */
export declare class Bundle extends SpeakeasyBase {
    /**
     * A sha1 hash of the upload payload, encoded as a hex string and matching the output of the sha1sum command.
     */
    sha1?: string;
    /**
     * A sha256 hash of the upload payload, encoded as a hex string and matching the output of the sha256sum command.
     */
    sha256?: string;
    /**
     * The version code of the Android App Bundle, as specified in the Android App Bundle's base module APK manifest file.
     */
    versionCode?: number;
}
