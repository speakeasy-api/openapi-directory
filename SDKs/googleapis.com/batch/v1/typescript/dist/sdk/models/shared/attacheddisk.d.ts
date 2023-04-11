import { SpeakeasyBase } from "../../../internal/utils";
import { Disk } from "./disk";
/**
 * A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.
 */
export declare class AttachedDisk extends SpeakeasyBase {
    /**
     * Device name that the guest operating system will see. It is used by Runnable.volumes field to mount disks. So please specify the device_name if you want Batch to help mount the disk, and it should match the device_name field in volumes.
     */
    deviceName?: string;
    /**
     * Name of an existing PD.
     */
    existingDisk?: string;
    /**
     * A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. See https://cloud.google.com/compute/docs/disks#pdspecs and https://cloud.google.com/compute/docs/disks#localssds.
     */
    newDisk?: Disk;
}
