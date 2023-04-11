import { SpeakeasyBase } from "../../../internal/utils";
/**
 * What should happen to the disk after the workstation is deleted. Defaults to DELETE.
 */
export declare enum GceRegionalPersistentDiskReclaimPolicyEnum {
    ReclaimPolicyUnspecified = "RECLAIM_POLICY_UNSPECIFIED",
    Delete = "DELETE",
    Retain = "RETAIN"
}
/**
 * A PersistentDirectory backed by a Compute Engine regional persistent disk.
 */
export declare class GceRegionalPersistentDisk extends SpeakeasyBase {
    /**
     * Type of the disk to use.
     */
    diskType?: string;
    /**
     * Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source_snapshot is set.
     */
    fsType?: string;
    /**
     * What should happen to the disk after the workstation is deleted. Defaults to DELETE.
     */
    reclaimPolicy?: GceRegionalPersistentDiskReclaimPolicyEnum;
    /**
     * Size of the disk in GB. Must be empty if source_snapshot is set.
     */
    sizeGb?: number;
    /**
     * Name of the snapshot to use as the source for the disk. If set, size_gb and fs_type must be empty.
     */
    sourceSnapshot?: string;
}
