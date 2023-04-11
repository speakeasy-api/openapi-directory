import { SpeakeasyBase } from "../../../internal/utils";
import { DiskPartitionList } from "./diskpartitionlist";
import { VmwareDiskConfig } from "./vmwarediskconfig";
/**
 * Single disk entry.
 */
export declare class DiskEntry extends SpeakeasyBase {
    /**
     * Disk label.
     */
    diskLabel?: string;
    /**
     * Disk label type (e.g. BIOS/GPT)
     */
    diskLabelType?: string;
    /**
     * Disk hardware address (e.g. 0:1 for SCSI).
     */
    hwAddress?: string;
    /**
     * Disks interface type (e.g. SATA/SCSI)
     */
    interfaceType?: string;
    /**
     * Disk partition list.
     */
    partitions?: DiskPartitionList;
    /**
     * Disk status (e.g. online).
     */
    status?: string;
    /**
     * Disk capacity.
     */
    totalCapacityBytes?: string;
    /**
     * Disk free space.
     */
    totalFreeBytes?: string;
    /**
     * VMware disk config details.
     */
    vmwareConfig?: VmwareDiskConfig;
}
