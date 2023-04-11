import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Encryption settings for the cluster.
 */
export declare class EncryptionConfig extends SpeakeasyBase {
    /**
     * Optional. The Cloud KMS key name to use for PD disk encryption for all instances in the cluster.
     */
    gcePdKmsKeyName?: string;
    /**
     * Optional. The Cloud KMS key name to use for encrypting customer core content and cluster PD disk for all instances in the cluster.
     */
    kmsKey?: string;
}
