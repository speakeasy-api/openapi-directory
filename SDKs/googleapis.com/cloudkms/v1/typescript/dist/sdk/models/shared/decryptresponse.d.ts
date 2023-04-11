import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ProtectionLevel of the CryptoKeyVersion used in decryption.
 */
export declare enum DecryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Response message for KeyManagementService.Decrypt.
 */
export declare class DecryptResponse extends SpeakeasyBase {
    /**
     * The decrypted data originally supplied in EncryptRequest.plaintext.
     */
    plaintext?: string;
    /**
     * Integrity verification field. A CRC32C checksum of the returned DecryptResponse.plaintext. An integrity check of DecryptResponse.plaintext can be performed by computing the CRC32C checksum of DecryptResponse.plaintext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: receiving this response message indicates that KeyManagementService is able to successfully decrypt the ciphertext. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
     */
    plaintextCrc32c?: string;
    /**
     * The ProtectionLevel of the CryptoKeyVersion used in decryption.
     */
    protectionLevel?: DecryptResponseProtectionLevelEnum;
    /**
     * Whether the Decryption was performed using the primary key version.
     */
    usedPrimary?: boolean;
}
