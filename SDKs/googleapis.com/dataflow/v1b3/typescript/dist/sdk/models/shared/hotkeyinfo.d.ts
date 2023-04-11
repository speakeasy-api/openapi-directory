import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a hot key.
 */
export declare class HotKeyInfo extends SpeakeasyBase {
    /**
     * The age of the hot key measured from when it was first detected.
     */
    hotKeyAge?: string;
    /**
     * A detected hot key that is causing limited parallelism. This field will be populated only if the following flag is set to true: "--enable_hot_key_logging".
     */
    key?: string;
    /**
     * If true, then the above key is truncated and cannot be deserialized. This occurs if the key above is populated and the key size is >5MB.
     */
    keyTruncated?: boolean;
}
