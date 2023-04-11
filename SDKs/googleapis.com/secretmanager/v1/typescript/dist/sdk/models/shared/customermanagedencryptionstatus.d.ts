import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes the status of customer-managed encryption.
 */
export declare class CustomerManagedEncryptionStatus extends SpeakeasyBase {
    /**
     * Required. The resource name of the Cloud KMS CryptoKeyVersion used to encrypt the secret payload, in the following format: `projects/* /locations/* /keyRings/* /cryptoKeys/* /versions/*`.
     */
    kmsKeyVersionName?: string;
}
