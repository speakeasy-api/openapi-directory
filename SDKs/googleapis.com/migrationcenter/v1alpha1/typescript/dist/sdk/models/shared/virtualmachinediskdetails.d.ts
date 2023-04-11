import { SpeakeasyBase } from "../../../internal/utils";
import { DiskEntryList } from "./diskentrylist";
/**
 * Details of VM disks.
 */
export declare class VirtualMachineDiskDetails extends SpeakeasyBase {
    /**
     * VM disks.
     */
    disks?: DiskEntryList;
    /**
     * Disk total Capacity.
     */
    hddTotalCapacityBytes?: string;
    /**
     * Total Disk Free Space.
     */
    hddTotalFreeBytes?: string;
    /**
     * Raw lsblk output in json.
     */
    lsblkJson?: string;
}
