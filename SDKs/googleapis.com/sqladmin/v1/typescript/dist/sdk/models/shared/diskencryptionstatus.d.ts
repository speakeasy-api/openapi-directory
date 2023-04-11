import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Disk encryption status for an instance.
 */
export declare class DiskEncryptionStatus extends SpeakeasyBase {
    /**
     * This is always `sql#diskEncryptionStatus`.
     */
    kind?: string;
    /**
     * KMS key version used to encrypt the Cloud SQL instance resource
     */
    kmsKeyVersionName?: string;
}
