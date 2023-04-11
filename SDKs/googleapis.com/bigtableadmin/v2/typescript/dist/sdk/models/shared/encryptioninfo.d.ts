import { SpeakeasyBase } from "../../../internal/utils";
import { Status } from "./status";
/**
 * Output only. The type of encryption used to protect this resource.
 */
export declare enum EncryptionInfoEncryptionTypeEnum {
    EncryptionTypeUnspecified = "ENCRYPTION_TYPE_UNSPECIFIED",
    GoogleDefaultEncryption = "GOOGLE_DEFAULT_ENCRYPTION",
    CustomerManagedEncryption = "CUSTOMER_MANAGED_ENCRYPTION"
}
/**
 * Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
 */
export declare class EncryptionInfo extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    encryptionStatus?: Status;
    /**
     * Output only. The type of encryption used to protect this resource.
     */
    encryptionType?: EncryptionInfoEncryptionTypeEnum;
    /**
     * Output only. The version of the Cloud KMS key specified in the parent cluster that is in use for the data underlying this table.
     */
    kmsKeyVersion?: string;
}
/**
 * Encryption information for a given resource. If this resource is protected with customer managed encryption, the in-use Cloud Key Management Service (Cloud KMS) key version is specified along with its status.
 */
export declare class EncryptionInfoInput extends SpeakeasyBase {
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    encryptionStatus?: Status;
}
