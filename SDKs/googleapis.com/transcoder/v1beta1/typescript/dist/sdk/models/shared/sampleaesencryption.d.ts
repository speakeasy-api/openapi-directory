import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for SAMPLE-AES encryption.
 */
export declare class SampleAesEncryption extends SpeakeasyBase {
    /**
     * Required. URI of the key delivery service. This URI is inserted into the M3U8 header.
     */
    keyUri?: string;
}
