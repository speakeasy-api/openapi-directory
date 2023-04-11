import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for MPEG Common Encryption (MPEG-CENC).
 */
export declare class MpegCommonEncryption extends SpeakeasyBase {
    /**
     * Required. 128 bit Key ID represented as lowercase hexadecimal digits for use with common encryption.
     */
    keyId?: string;
    /**
     * Required. Specify the encryption scheme. Supported encryption schemes: - 'cenc' - 'cbcs'
     */
    scheme?: string;
}
