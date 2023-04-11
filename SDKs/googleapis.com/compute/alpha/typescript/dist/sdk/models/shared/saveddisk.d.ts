import { SpeakeasyBase } from "../../../internal/utils";
/**
 * [Output Only] The architecture of the attached disk.
 */
export declare enum SavedDiskArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    Arm64 = "ARM64",
    X8664 = "X86_64"
}
/**
 * [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.
 */
export declare enum SavedDiskStorageBytesStatusEnum {
    Updating = "UPDATING",
    UpToDate = "UP_TO_DATE"
}
/**
 * An instance-attached disk resource.
 */
export declare class SavedDisk extends SpeakeasyBase {
    /**
     * [Output Only] The architecture of the attached disk.
     */
    architecture?: SavedDiskArchitectureEnum;
    /**
     * [Output Only] Type of the resource. Always compute#savedDisk for attached disks.
     */
    kind?: string;
    /**
     * Specifies a URL of the disk attached to the source instance.
     */
    sourceDisk?: string;
    /**
     * [Output Only] Size of the individual disk snapshot used by this machine image.
     */
    storageBytes?: string;
    /**
     * [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.
     */
    storageBytesStatus?: SavedDiskStorageBytesStatusEnum;
}
