import { SpeakeasyBase } from "../../../internal/utils";
import { NamespacedName } from "./namespacedname";
/**
 * Output only. The current state of this VolumeRestore.
 */
export declare enum VolumeRestoreStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Restoring = "RESTORING",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    Deleting = "DELETING"
}
/**
 * Output only. The type of volume provisioned
 */
export declare enum VolumeRestoreVolumeTypeEnum {
    VolumeTypeUnspecified = "VOLUME_TYPE_UNSPECIFIED",
    GcePersistentDisk = "GCE_PERSISTENT_DISK"
}
/**
 * Represents the operation of restoring a volume from a VolumeBackup. Next id: 13
 */
export declare class VolumeRestore extends SpeakeasyBase {
    /**
     * Output only. The timestamp when the associated underlying volume restoration completed.
     */
    completeTime?: string;
    /**
     * Output only. The timestamp when this VolumeRestore resource was created.
     */
    createTime?: string;
    /**
     * Output only. `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a volume restore from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform volume restore updates in order to avoid race conditions.
     */
    etag?: string;
    /**
     * Output only. Full name of the VolumeRestore resource. Format: `projects/* /locations/* /restorePlans/* /restores/* /volumeRestores/*`
     */
    name?: string;
    /**
     * Output only. The current state of this VolumeRestore.
     */
    state?: VolumeRestoreStateEnum;
    /**
     * Output only. A human readable message explaining why the VolumeRestore is in its current state.
     */
    stateMessage?: string;
    /**
     * A reference to a namespaced resource in Kubernetes.
     */
    targetPvc?: NamespacedName;
    /**
     * Output only. Server generated global unique identifier of [UUID](https://en.wikipedia.org/wiki/Universally_unique_identifier) format.
     */
    uid?: string;
    /**
     * Output only. The timestamp when this VolumeRestore resource was last updated.
     */
    updateTime?: string;
    /**
     * Output only. The full name of the VolumeBackup from which the volume will be restored. Format: `projects/* /locations/* /backupPlans/* /backups/* /volumeBackups/*`.
     */
    volumeBackup?: string;
    /**
     * Output only. A storage system-specific opaque handler to the underlying volume created for the target PVC from the volume backup.
     */
    volumeHandle?: string;
    /**
     * Output only. The type of volume provisioned
     */
    volumeType?: VolumeRestoreVolumeTypeEnum;
}
