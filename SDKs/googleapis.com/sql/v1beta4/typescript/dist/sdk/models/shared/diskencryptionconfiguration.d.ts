import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Disk encryption configuration for an instance.
 */
export declare class DiskEncryptionConfiguration extends SpeakeasyBase {
    /**
     * This is always `sql#diskEncryptionConfiguration`.
     */
    kind?: string;
    /**
     * Resource name of KMS key for disk encryption
     */
    kmsKeyName?: string;
}
