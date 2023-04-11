import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterMetadata } from "./clustermetadata";
import { EncryptionKey } from "./encryptionkey";
import { NamespacedNames } from "./namespacednames";
import { Namespaces } from "./namespaces";
/**
 * Output only. Current state of the Backup
 */
export declare enum BackupStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    InProgress = "IN_PROGRESS",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
 */
export declare class Backup extends SpeakeasyBase {
    /**
     * Output only. If True, all namespaces were included in the Backup.
     */
    allNamespaces?: boolean;
    /**
     * Information about the GKE cluster from which this Backup was created.
     */
    clusterMetadata?: ClusterMetadata;
    /**
     * Output only. Completion time of the Backup
     */
    completeTime?: string;
    /**
     * Output only. The size of the config backup in bytes.
     */
    configBackupSizeBytes?: string;
    /**
     * Output only. Whether or not the Backup contains Kubernetes Secrets. Controlled by the parent BackupPlan's include_secrets value.
     */
    containsSecrets?: boolean;
    /**
     * Output only. Whether or not the Backup contains volume data. Controlled by the parent BackupPlan's include_volume_data value.
     */
    containsVolumeData?: boolean;
    /**
     * Output only. The timestamp when this Backup resource was created.
     */
    createTime?: string;
    /**
     * Minimum age for this Backup (in days). If this field is set to a non-zero value, the Backup will be "locked" against deletion (either manual or automatic deletion) for the number of days provided (measured from the creation time of the Backup). MUST be an integer value between 0-90 (inclusive). Defaults to parent BackupPlan's backup_delete_lock_days setting and may only be increased (either at creation time or in a subsequent update).
     */
    deleteLockDays?: number;
    /**
     * Output only. The time at which an existing delete lock will expire for this backup (calculated from create_time + delete_lock_days).
     */
    deleteLockExpireTime?: string;
    /**
     * User specified descriptive string for this Backup.
     */
    description?: string;
    /**
     * Defined a customer managed encryption key that will be used to encrypt Backup artifacts.
     */
    encryptionKey?: EncryptionKey;
    /**
     * Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a backup from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform backup updates in order to avoid race conditions: An `etag` is returned in the response to `GetBackup`, and systems are expected to put that etag in the request to `UpdateBackup` or `DeleteBackup` to ensure that their change will be applied to the same version of the resource.
     */
    etag?: string;
    /**
     * A set of custom labels supplied by user.
     */
    labels?: Record<string, string>;
    /**
     * Output only. This flag indicates whether this Backup resource was created manually by a user or via a schedule in the BackupPlan. A value of True means that the Backup was created manually.
     */
    manual?: boolean;
    /**
     * Output only. The fully qualified name of the Backup. `projects/* /locations/* /backupPlans/* /backups/*`
     */
    name?: string;
    /**
     * Output only. The total number of Kubernetes Pods contained in the Backup.
     */
    podCount?: number;
    /**
     * Output only. The total number of Kubernetes resources included in the Backup.
     */
    resourceCount?: number;
    /**
     * The age (in days) after which this Backup will be automatically deleted. Must be an integer value >= 0: - If 0, no automatic deletion will occur for this Backup. - If not 0, this must be >= delete_lock_days and <= 365. Once a Backup is created, this value may only be increased. Defaults to the parent BackupPlan's backup_retain_days value.
     */
    retainDays?: number;
    /**
     * Output only. The time at which this Backup will be automatically deleted (calculated from create_time + retain_days).
     */
    retainExpireTime?: string;
    /**
     * A list of namespaced Kubernetes resources.
     */
    selectedApplications?: NamespacedNames;
    /**
     * A list of Kubernetes Namespaces
     */
    selectedNamespaces?: Namespaces;
    /**
     * Output only. The total size of the Backup in bytes = config backup size + sum(volume backup sizes)
     */
    sizeBytes?: string;
    /**
     * Output only. Current state of the Backup
     */
    state?: BackupStateEnum;
    /**
     * Output only. Human-readable description of why the backup is in the current `state`.
     */
    stateReason?: string;
    /**
     * Output only. Server generated global unique identifier of [UUID4](https://en.wikipedia.org/wiki/Universally_unique_identifier)
     */
    uid?: string;
    /**
     * Output only. The timestamp when this Backup resource was last updated.
     */
    updateTime?: string;
    /**
     * Output only. The total number of volume backups contained in the Backup.
     */
    volumeCount?: number;
}
/**
 * Represents a request to perform a single point-in-time capture of some portion of the state of a GKE cluster, the record of the backup operation itself, and an anchor for the underlying artifacts that comprise the Backup (the config backup and VolumeBackups). Next id: 28
 */
export declare class BackupInput extends SpeakeasyBase {
    /**
     * Information about the GKE cluster from which this Backup was created.
     */
    clusterMetadata?: ClusterMetadata;
    /**
     * Minimum age for this Backup (in days). If this field is set to a non-zero value, the Backup will be "locked" against deletion (either manual or automatic deletion) for the number of days provided (measured from the creation time of the Backup). MUST be an integer value between 0-90 (inclusive). Defaults to parent BackupPlan's backup_delete_lock_days setting and may only be increased (either at creation time or in a subsequent update).
     */
    deleteLockDays?: number;
    /**
     * User specified descriptive string for this Backup.
     */
    description?: string;
    /**
     * Defined a customer managed encryption key that will be used to encrypt Backup artifacts.
     */
    encryptionKey?: EncryptionKey;
    /**
     * A set of custom labels supplied by user.
     */
    labels?: Record<string, string>;
    /**
     * The age (in days) after which this Backup will be automatically deleted. Must be an integer value >= 0: - If 0, no automatic deletion will occur for this Backup. - If not 0, this must be >= delete_lock_days and <= 365. Once a Backup is created, this value may only be increased. Defaults to the parent BackupPlan's backup_retain_days value.
     */
    retainDays?: number;
    /**
     * A list of namespaced Kubernetes resources.
     */
    selectedApplications?: NamespacedNames;
    /**
     * A list of Kubernetes Namespaces
     */
    selectedNamespaces?: Namespaces;
}
