import { SpeakeasyBase } from "../../../internal/utils";
import { NamespacedName } from "./namespacedname";
/**
 * Output only. The format used for the volume backup.
 */
export declare enum VolumeBackupFormatEnum {
    VolumeBackupFormatUnspecified = "VOLUME_BACKUP_FORMAT_UNSPECIFIED",
    GcePersistentDisk = "GCE_PERSISTENT_DISK"
}
/**
 * Output only. The current state of this VolumeBackup.
 */
export declare enum VolumeBackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Snapshotting = "SNAPSHOTTING",
    Uploading = "UPLOADING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * Represents the backup of a specific persistent volume as a component of a Backup - both the record of the operation and a pointer to the underlying storage-specific artifacts. Next id: 14
 */
export declare class VolumeBackup extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the associated underlying volume backup operation completed.
     */
    completeTime?: string;
    /**
     * Output only. The timestamp when this VolumeBackup resource was created.
     */
    createTime?: string;
    /**
     * Output only. The minimum size of the disk to which this VolumeBackup can be restored.
     */
    diskSizeBytes?: string;
    /**
     * Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume backup from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform volume backup updates in order to avoid race conditions.
     */
    etag?: string;
    /**
     * Output only. The format used for the volume backup.
     */
    format?: VolumeBackupFormatEnum;
    /**
     * Output only. The full name of the VolumeBackup resource. Format: `projects/* /locations/* /backupPlans/* /backups/* /volumeBackups/*`.
     */
    name?: string;
    /**
     * A reference to a namespaced resource in Kubernetes.
     */
    sourcePvc?: NamespacedName;
    /**
     * Output only. The current state of this VolumeBackup.
     */
    state?: VolumeBackupStateEnum;
    /**
     * Output only. A human readable message explaining why the VolumeBackup is in its current state.
     */
    stateMessage?: string;
    /**
     * Output only. The aggregate size of the underlying artifacts associated with this VolumeBackup in the backup storage. This may change over time when multiple backups of the same volume share the same backup storage location. In particular, this is likely to increase in size when the immediately preceding backup of the same volume is deleted.
     */
    storageBytes?: string;
    /**
     * Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.
     */
    uid?: string;
    /**
     * Output only. The timestamp when this VolumeBackup resource was last updated.
     */
    updateTime?: string;
    /**
     * Output only. A storage system-specific opaque handle to the underlying volume backup.
     */
    volumeBackupHandle?: string;
}
