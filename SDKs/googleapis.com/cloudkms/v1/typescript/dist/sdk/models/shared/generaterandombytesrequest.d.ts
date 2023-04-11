import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported.
 */
export declare enum GenerateRandomBytesRequestProtectionLevelEnum {
    ProtectionLevelUnspecified = "PROTECTION_LEVEL_UNSPECIFIED",
    Software = "SOFTWARE",
    Hsm = "HSM",
    External = "EXTERNAL",
    ExternalVpc = "EXTERNAL_VPC"
}
/**
 * Request message for KeyManagementService.GenerateRandomBytes.
 */
export declare class GenerateRandomBytesRequest extends SpeakeasyBase {
    /**
     * The length in bytes of the amount of randomness to retrieve. Minimum 8 bytes, maximum 1024 bytes.
     */
    lengthBytes?: number;
    /**
     * The ProtectionLevel to use when generating the random data. Currently, only HSM protection level is supported.
     */
    protectionLevel?: GenerateRandomBytesRequestProtectionLevelEnum;
}
