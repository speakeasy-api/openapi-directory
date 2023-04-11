import { SpeakeasyBase } from "../../../internal/utils";
export declare class DiskMoveRequest extends SpeakeasyBase {
    /**
     * The URL of the destination zone to move the disk. This can be a full or partial URL. For example, the following are all valid URLs to a zone: - https://www.googleapis.com/compute/v1/projects/project/zones/zone - projects/project/zones/zone - zones/zone
     */
    destinationZone?: string;
    /**
     * The URL of the target disk to move. This can be a full or partial URL. For example, the following are all valid URLs to a disk: - https://www.googleapis.com/compute/v1/projects/project/zones/zone /disks/disk - projects/project/zones/zone/disks/disk - zones/zone/disks/disk
     */
    targetDisk?: string;
}
