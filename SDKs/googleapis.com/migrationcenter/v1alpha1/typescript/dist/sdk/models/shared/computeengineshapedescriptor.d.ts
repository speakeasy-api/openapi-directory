import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Compute Engine target shape descriptor.
 */
export declare class ComputeEngineShapeDescriptor extends SpeakeasyBase {
    /**
     * Number of logical cores.
     */
    logicalCoreCount?: number;
    /**
     * Compute Engine machine type.
     */
    machineType?: string;
    /**
     * Memory in mebibytes.
     */
    memoryMb?: number;
    /**
     * Number of physical cores.
     */
    physicalCoreCount?: number;
    /**
     * Compute Engine machine series.
     */
    series?: string;
}
