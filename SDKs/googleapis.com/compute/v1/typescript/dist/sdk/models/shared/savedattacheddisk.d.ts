import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerEncryptionKey } from "./customerencryptionkey";
import { GuestOsFeature } from "./guestosfeature";
/**
 * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.
 */
export declare enum SavedAttachedDiskInterfaceEnum {
    Nvme = "NVME",
    Scsi = "SCSI"
}
/**
 * The mode in which this disk is attached to the source instance, either READ_WRITE or READ_ONLY.
 */
export declare enum SavedAttachedDiskModeEnum {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
}
/**
 * [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.
 */
export declare enum SavedAttachedDiskStorageBytesStatusEnum {
    Updating = "UPDATING",
    UpToDate = "UP_TO_DATE"
}
/**
 * Specifies the type of the attached disk, either SCRATCH or PERSISTENT.
 */
export declare enum SavedAttachedDiskTypeEnum {
    Persistent = "PERSISTENT",
    Scratch = "SCRATCH"
}
/**
 * DEPRECATED: Please use compute#savedDisk instead. An instance-attached disk resource.
 */
export declare class SavedAttachedDisk extends SpeakeasyBase {
    /**
     * Specifies whether the disk will be auto-deleted when the instance is deleted (but not when the disk is detached from the instance).
     */
    autoDelete?: boolean;
    /**
     * Indicates that this is a boot disk. The virtual machine will use the first partition of the disk for its root filesystem.
     */
    boot?: boolean;
    /**
     * Specifies the name of the disk attached to the source instance.
     */
    deviceName?: string;
    diskEncryptionKey?: CustomerEncryptionKey;
    /**
     * The size of the disk in base-2 GB.
     */
    diskSizeGb?: string;
    /**
     * [Output Only] URL of the disk type resource. For example: projects/project /zones/zone/diskTypes/pd-standard or pd-ssd
     */
    diskType?: string;
    /**
     * A list of features to enable on the guest operating system. Applicable only for bootable images. Read Enabling guest operating system features to see a list of available options.
     */
    guestOsFeatures?: GuestOsFeature[];
    /**
     * Specifies zero-based index of the disk that is attached to the source instance.
     */
    index?: number;
    /**
     * Specifies the disk interface to use for attaching this disk, which is either SCSI or NVME.
     */
    interface?: SavedAttachedDiskInterfaceEnum;
    /**
     * [Output Only] Type of the resource. Always compute#attachedDisk for attached disks.
     */
    kind?: string;
    /**
     * [Output Only] Any valid publicly visible licenses.
     */
    licenses?: string[];
    /**
     * The mode in which this disk is attached to the source instance, either READ_WRITE or READ_ONLY.
     */
    mode?: SavedAttachedDiskModeEnum;
    /**
     * Specifies a URL of the disk attached to the source instance.
     */
    source?: string;
    /**
     * [Output Only] A size of the storage used by the disk's snapshot by this machine image.
     */
    storageBytes?: string;
    /**
     * [Output Only] An indicator whether storageBytes is in a stable state or it is being adjusted as a result of shared storage reallocation. This status can either be UPDATING, meaning the size of the snapshot is being updated, or UP_TO_DATE, meaning the size of the snapshot is up-to-date.
     */
    storageBytesStatus?: SavedAttachedDiskStorageBytesStatusEnum;
    /**
     * Specifies the type of the attached disk, either SCRATCH or PERSISTENT.
     */
    type?: SavedAttachedDiskTypeEnum;
}
