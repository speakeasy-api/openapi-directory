import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Compute resource requirements
 */
export declare class ComputeResource extends SpeakeasyBase {
    /**
     * Extra boot disk size in MiB for each task.
     */
    bootDiskMib?: string;
    /**
     * The milliCPU count.
     */
    cpuMilli?: string;
    /**
     * Memory in MiB.
     */
    memoryMib?: string;
}
