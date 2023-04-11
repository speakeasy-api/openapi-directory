import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A GkeNodeConfigAcceleratorConfig represents a Hardware Accelerator request for a node pool.
 */
export declare class GkeNodePoolAcceleratorConfig extends SpeakeasyBase {
    /**
     * The number of accelerator cards exposed to an instance.
     */
    acceleratorCount?: string;
    /**
     * The accelerator type resource namename (see GPUs on Compute Engine).
     */
    acceleratorType?: string;
    /**
     * Size of partitions to create on the GPU. Valid values are described in the NVIDIA mig user guide (https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
     */
    gpuPartitionSize?: string;
}
