import { SpeakeasyBase } from "../../../internal/utils";
import { DiskStatus } from "./diskstatus";
/**
 * The status of the worker VM.
 */
export declare class WorkerStatus extends SpeakeasyBase {
    /**
     * Status of attached disks.
     */
    attachedDisks?: Record<string, DiskStatus>;
    /**
     * The status of a disk on a VM.
     */
    bootDisk?: DiskStatus;
    /**
     * Free RAM.
     */
    freeRamBytes?: string;
    /**
     * Total RAM.
     */
    totalRamBytes?: string;
    /**
     * System uptime.
     */
    uptimeSeconds?: string;
}
