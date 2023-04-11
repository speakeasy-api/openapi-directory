import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Cloud Key Management Service (Cloud KMS) settings for a CMEK-protected cluster.
 */
export declare class EncryptionConfig extends SpeakeasyBase {
    /**
     * Describes the Cloud KMS encryption key that will be used to protect the destination Bigtable cluster. The requirements for this key are: 1) The Cloud Bigtable service account associated with the project that contains this cluster must be granted the `cloudkms.cryptoKeyEncrypterDecrypter` role on the CMEK key. 2) Only regional keys can be used and the region of the CMEK key must match the region of the cluster. Values are of the form `projects/{project}/locations/{location}/keyRings/{keyring}/cryptoKeys/{key}`
     */
    kmsKeyName?: string;
}
