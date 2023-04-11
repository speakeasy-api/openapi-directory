import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ProtectionLevel of the CryptoKeyVersion used for signing.
 */
export declare enum MacSignResponseProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Response message for KeyManagementService.MacSign.
 */
export declare class MacSignResponse extends SpeakeasyBase {
    /**
     * The created signature.
     */
    mac?: string;
    /**
     * Integrity verification field. A CRC32C checksum of the returned MacSignResponse.mac. An integrity check of MacSignResponse.mac can be performed by computing the CRC32C checksum of MacSignResponse.mac and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
     */
    macCrc32c?: string;
    /**
     * The resource name of the CryptoKeyVersion used for signing. Check this field to verify that the intended resource was used for signing.
     */
    name?: string;
    /**
     * The ProtectionLevel of the CryptoKeyVersion used for signing.
     */
    protectionLevel?: MacSignResponseProtectionLevelEnum;
    /**
     * Integrity verification field. A flag indicating whether MacSignRequest.data_crc32c was received by KeyManagementService and used for the integrity verification of the data. A false value of this field indicates either that MacSignRequest.data_crc32c was left unset or that it was not delivered to KeyManagementService. If you've set MacSignRequest.data_crc32c but this field is still false, discard the response and perform a limited number of retries.
     */
    verifiedDataCrc32c?: boolean;
}
