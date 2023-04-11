import { SpeakeasyBase } from "../../../internal/utils";
/**
 * These stateful disks will never be deleted during autohealing, update, instance recreate operations. This flag is used to configure if the disk should be deleted after it is no longer used by the group, e.g. when the given instance or the whole MIG is deleted. Note: disks attached in READ_ONLY mode cannot be auto-deleted.
 */
export declare enum PreservedStatePreservedDiskAutoDeleteEnum {
    Never = "NEVER",
    OnPermanentInstanceDeletion = "ON_PERMANENT_INSTANCE_DELETION"
}
/**
 * The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
 */
export declare enum PreservedStatePreservedDiskModeEnum {
    ReadOnly = "READ_ONLY",
    ReadWrite = "READ_WRITE"
}
export declare class PreservedStatePreservedDisk extends SpeakeasyBase {
    /**
     * These stateful disks will never be deleted during autohealing, update, instance recreate operations. This flag is used to configure if the disk should be deleted after it is no longer used by the group, e.g. when the given instance or the whole MIG is deleted. Note: disks attached in READ_ONLY mode cannot be auto-deleted.
     */
    autoDelete?: PreservedStatePreservedDiskAutoDeleteEnum;
    /**
     * The mode in which to attach this disk, either READ_WRITE or READ_ONLY. If not specified, the default is to attach the disk in READ_WRITE mode.
     */
    mode?: PreservedStatePreservedDiskModeEnum;
    /**
     * The URL of the disk resource that is stateful and should be attached to the VM instance.
     */
    source?: string;
}
