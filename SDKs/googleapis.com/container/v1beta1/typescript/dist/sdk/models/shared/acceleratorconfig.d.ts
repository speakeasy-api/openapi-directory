import { SpeakeasyBase } from "../../../internal/utils";
import { GPUSharingConfig } from "./gpusharingconfig";
/**
 * AcceleratorConfig represents a Hardware Accelerator request.
 */
export declare class AcceleratorConfig extends SpeakeasyBase {
    /**
     * The number of the accelerator cards exposed to an instance.
     */
    acceleratorCount?: string;
    /**
     * The accelerator type resource name. List of supported accelerators [here](https://cloud.google.com/compute/docs/gpus)
     */
    acceleratorType?: string;
    /**
     * Size of partitions to create on the GPU. Valid values are described in the NVIDIA [mig user guide](https://docs.nvidia.com/datacenter/tesla/mig-user-guide/#partitioning).
     */
    gpuPartitionSize?: string;
    /**
     * GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.
     */
    gpuSharingConfig?: GPUSharingConfig;
    /**
     * The number of time-shared GPU resources to expose for each physical GPU.
     */
    maxTimeSharedClientsPerGpu?: string;
}
