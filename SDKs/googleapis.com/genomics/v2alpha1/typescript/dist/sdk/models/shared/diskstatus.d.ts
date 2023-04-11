import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of a disk on a VM.
 */
export declare class DiskStatus extends SpeakeasyBase {
    /**
     * Free disk space.
     */
    freeSpaceBytes?: string;
    /**
     * Total disk space.
     */
    totalSpaceBytes?: string;
}
