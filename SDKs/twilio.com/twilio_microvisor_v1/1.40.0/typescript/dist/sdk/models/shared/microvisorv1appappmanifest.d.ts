import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class MicrovisorV1AppAppManifest extends SpeakeasyBase {
    /**
     * A 34-character string that uniquely identifies this App.
     */
    appSid?: string;
    /**
     * The base-64 encoded manifest
     */
    encodedBytes?: string;
    /**
     * App manifest hash represented as `hash_algorithm:hash_value`.
     */
    hash?: string;
    /**
     * The absolute URL of this Manifest.
     */
    url?: string;
}
