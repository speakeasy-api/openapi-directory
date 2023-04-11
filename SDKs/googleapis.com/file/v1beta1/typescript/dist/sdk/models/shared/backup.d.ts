import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. The service tier of the source Filestore instance that this backup is created from.
 */
export declare enum BackupSourceInstanceTierEnum {
    TierUnspecified = "TIER_UNSPECIFIED",
    Standard = "STANDARD",
    Premium = "PREMIUM",
    BasicHdd = "BASIC_HDD",
    BasicSsd = "BASIC_SSD",
    HighScaleSsd = "HIGH_SCALE_SSD",
    Enterprise = "ENTERPRISE"
}
/**
 * Output only. The backup state.
 */
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Finalizing = "FINALIZING",
    Ready = "READY",
    Deleting = "DELETING"
}
/**
 * A Filestore backup.
 */
export declare class Backup extends SpeakeasyBase {
    /**
     * Output only. Capacity of the source file share when the backup was created.
     */
    capacityGb?: string;
    /**
     * Output only. The time when the backup was created.
     */
    createTime?: string;
    /**
     * A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
     */
    description?: string;
    /**
     * Output only. Amount of bytes that will be downloaded if the backup is restored
     */
    downloadBytes?: string;
    /**
     * Immutable. KMS key name used for data encryption.
     */
    kmsKeyName?: string;
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Output only. The resource name of the backup, in the format `projects/{project_id}/locations/{location_id}/backups/{backup_id}`.
     */
    name?: string;
    /**
     * Output only. Reserved for future use.
     */
    satisfiesPzs?: boolean;
    /**
     * Name of the file share in the source Filestore instance that the backup is created from.
     */
    sourceFileShare?: string;
    /**
     * The resource name of the source Filestore instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`, used to create this backup.
     */
    sourceInstance?: string;
    /**
     * Output only. The service tier of the source Filestore instance that this backup is created from.
     */
    sourceInstanceTier?: BackupSourceInstanceTierEnum;
    /**
     * Output only. The backup state.
     */
    state?: BackupStateEnum;
    /**
     * Output only. The size of the storage used by the backup. As backups share storage, this number is expected to change with backup creation/deletion.
     */
    storageBytes?: string;
}
/**
 * A Filestore backup.
 */
export declare class BackupInput extends SpeakeasyBase {
    /**
     * A description of the backup with 2048 characters or less. Requests with longer descriptions will be rejected.
     */
    description?: string;
    /**
     * Immutable. KMS key name used for data encryption.
     */
    kmsKeyName?: string;
    /**
     * Resource labels to represent user provided metadata.
     */
    labels?: Record<string, string>;
    /**
     * Name of the file share in the source Filestore instance that the backup is created from.
     */
    sourceFileShare?: string;
    /**
     * The resource name of the source Filestore instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`, used to create this backup.
     */
    sourceInstance?: string;
}
