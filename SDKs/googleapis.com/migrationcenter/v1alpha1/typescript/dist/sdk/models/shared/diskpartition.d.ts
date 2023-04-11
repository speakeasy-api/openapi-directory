import { SpeakeasyBase } from "../../../internal/utils";
import { DiskPartitionList } from "./diskpartitionlist";
/**
 * Disk Partition details.
 */
export declare class DiskPartition extends SpeakeasyBase {
    /**
     * Partition capacity.
     */
    capacityBytes?: string;
    /**
     * Partition file system.
     */
    fileSystem?: string;
    /**
     * Partition free space.
     */
    freeBytes?: string;
    /**
     * Mount pount (Linux/Windows) or drive letter (Windows).
     */
    mountPoint?: string;
    /**
     * Disk partition list.
     */
    subPartitions?: DiskPartitionList;
    /**
     * Partition type (e.g. BIOS boot).
     */
    type?: string;
    /**
     * Partition UUID.
     */
    uuid?: string;
}
