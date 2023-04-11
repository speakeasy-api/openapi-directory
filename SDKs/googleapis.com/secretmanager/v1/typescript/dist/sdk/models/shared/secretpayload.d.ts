import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A secret payload resource in the Secret Manager API. This contains the sensitive secret payload that is associated with a SecretVersion.
 */
export declare class SecretPayload extends SpeakeasyBase {
    /**
     * The secret data. Must be no larger than 64KiB.
     */
    data?: string;
    /**
     * Optional. If specified, SecretManagerService will verify the integrity of the received data on SecretManagerService.AddSecretVersion calls using the crc32c checksum and store it to include in future SecretManagerService.AccessSecretVersion responses. If a checksum is not provided in the SecretManagerService.AddSecretVersion request, the SecretManagerService will generate and store one for you. The CRC32C value is encoded as a Int64 for compatibility, and can be safely downconverted to uint32 in languages that support this type. https://cloud.google.com/apis/design/design_patterns#integer_types
     */
    dataCrc32c?: string;
}
