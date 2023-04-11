import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
 */
export declare class CustomerManagedEncryption extends SpeakeasyBase {
    /**
     * Required. The resource name of the Cloud KMS CryptoKey used to encrypt secret payloads. For secrets using the UserManaged replication policy type, Cloud KMS CryptoKeys must reside in the same location as the replica location. For secrets using the Automatic replication policy type, Cloud KMS CryptoKeys must reside in `global`. The expected format is `projects/* /locations/* /keyRings/* /cryptoKeys/*`.
     */
    kmsKeyName?: string;
}
