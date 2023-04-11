import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks.
 */
export declare enum AttachedDiskModeEnum {
    DiskModeUnspecified = "DISK_MODE_UNSPECIFIED",
    ReadWrite = "READ_WRITE",
    ReadOnly = "READ_ONLY"
}
/**
 * A node-attached disk resource. Next ID: 8;
 */
export declare class AttachedDisk extends SpeakeasyBase {
    /**
     * The mode in which to attach this disk. If not specified, the default is READ_WRITE mode. Only applicable to data_disks.
     */
    mode?: AttachedDiskModeEnum;
    /**
     * Specifies the full path to an existing disk. For example: "projects/my-project/zones/us-central1-c/disks/my-disk".
     */
    sourceDisk?: string;
}
