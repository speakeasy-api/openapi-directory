import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data disk assignment for a given VM instance.
 */
export declare class DataDiskAssignment extends SpeakeasyBase {
    /**
     * Mounted data disks. The order is important a data disk's 0-based index in this list defines which persistent directory the disk is mounted to, for example the list of { "myproject-1014-104817-4c2-harness-0-disk-0" }, { "myproject-1014-104817-4c2-harness-0-disk-1" }.
     */
    dataDisks?: string[];
    /**
     * VM instance name the data disks mounted to, for example "myproject-1014-104817-4c2-harness-0".
     */
    vmInstance?: string;
}
