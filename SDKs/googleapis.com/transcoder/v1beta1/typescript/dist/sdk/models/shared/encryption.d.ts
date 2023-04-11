import { SpeakeasyBase } from "../../../internal/utils";
import { Aes128Encryption } from "./aes128encryption";
import { MpegCommonEncryption } from "./mpegcommonencryption";
import { SampleAesEncryption } from "./sampleaesencryption";
/**
 * Encryption settings.
 */
export declare class Encryption extends SpeakeasyBase {
    /**
     * Configuration for AES-128 encryption.
     */
    aes128?: Aes128Encryption;
    /**
     * Required. 128 bit Initialization Vector (IV) represented as lowercase hexadecimal digits.
     */
    iv?: string;
    /**
     * Required. 128 bit encryption key represented as lowercase hexadecimal digits.
     */
    key?: string;
    /**
     * Configuration for MPEG Common Encryption (MPEG-CENC).
     */
    mpegCenc?: MpegCommonEncryption;
    /**
     * Configuration for SAMPLE-AES encryption.
     */
    sampleAes?: SampleAesEncryption;
}
