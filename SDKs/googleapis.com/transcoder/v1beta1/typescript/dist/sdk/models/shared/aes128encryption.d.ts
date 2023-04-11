import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for AES-128 encryption.
 */
export declare class Aes128Encryption extends SpeakeasyBase {
    /**
     * Required. URI of the key delivery service. This URI is inserted into the M3U8 header.
     */
    keyUri?: string;
}
