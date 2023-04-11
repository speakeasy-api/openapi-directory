import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for KeyManagementService.GenerateRandomBytes.
 */
export declare class GenerateRandomBytesResponse extends SpeakeasyBase {
    /**
     * The generated data.
     */
    data?: string;
    /**
     * Integrity verification field. A CRC32C checksum of the returned GenerateRandomBytesResponse.data. An integrity check of GenerateRandomBytesResponse.data can be performed by computing the CRC32C checksum of GenerateRandomBytesResponse.data and comparing your results to this field. Discard the response in case of non-matching checksum values, and perform a limited number of retries. A persistent mismatch may indicate an issue in your computation of the CRC32C checksum. Note: This field is defined as int64 for reasons of compatibility across different languages. However, it is a non-negative integer, which will never exceed 2^32-1, and can be safely downconverted to uint32 in languages that support this type.
     */
    dataCrc32c?: string;
}
