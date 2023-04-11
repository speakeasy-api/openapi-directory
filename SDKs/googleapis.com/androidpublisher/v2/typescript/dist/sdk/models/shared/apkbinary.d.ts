import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the binary payload of an APK.
 */
export declare class ApkBinary extends SpeakeasyBase {
    /**
     * A sha1 hash of the APK payload, encoded as a hex string and matching the output of the sha1sum command.
     */
    sha1?: string;
    /**
     * A sha256 hash of the APK payload, encoded as a hex string and matching the output of the sha256sum command.
     */
    sha256?: string;
}
