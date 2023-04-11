import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ProtectionLevel of the CryptoKeyVersion used in encryption.
 */
export declare enum EncryptResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Response message for KeyManagementService.Encrypt.
 */
export declare class EncryptResponse extends SpeakeasyBase {
    /**
     * The encrypted data.
     */
    ciphertext?: string;
    /**
     * Integrity verification field. A CRC32C checksum of the returned EncryptResponse.ciphertext. An integrity check of EncryptResponse.ciphertext can be performed by computing the CRC32C checksum of EncryptResponse.ciphertext and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
     */
    ciphertextCrc32c?: string;
    /**
     * The resource name of the CryptoKeyVersion used in encryption. Check this field to verify that the intended resource was used for encryption.
     */
    name?: string;
    /**
     * The ProtectionLevel of the CryptoKeyVersion used in encryption.
     */
    protectionLevel?: EncryptResponseProtectionLevelEnum;
    /**
     * Integrity verification field. A flag indicating whether EncryptRequest.additional_authenticated_data_crc32c was received by KeyManagementService and used for the integrity verification of the AAD. A false value of this field indicates either that EncryptRequest.additional_authenticated_data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.additional_authenticated_data_crc32c but this field is still false, discard the response and perform a limited number of retries.
     */
    verifiedAdditionalAuthenticatedDataCrc32c?: boolean;
    /**
     * Integrity verification field. A flag indicating whether EncryptRequest.plaintext_crc32c was received by KeyManagementService and used for the integrity verification of the plaintext. A false value of this field indicates either that EncryptRequest.plaintext_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set EncryptRequest.plaintext_crc32c but this field is still false, discard the response and perform a limited number of retries.
     */
    verifiedPlaintextCrc32c?: boolean;
}
