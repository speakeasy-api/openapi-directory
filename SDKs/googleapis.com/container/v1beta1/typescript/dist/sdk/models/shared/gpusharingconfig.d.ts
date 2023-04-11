import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of GPU sharing strategy to enable on the GPU node.
 */
export declare enum GPUSharingConfigGPUSharingStrategyEnum {
    GpuSharingStrategyUnspecified = "GPU_SHARING_STRATEGY_UNSPECIFIED",
    TimeSharing = "TIME_SHARING"
}
/**
 * GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.
 */
export declare class GPUSharingConfig extends SpeakeasyBase {
    /**
     * The type of GPU sharing strategy to enable on the GPU node.
     */
    gpuSharingStrategy?: GPUSharingConfigGPUSharingStrategyEnum;
    /**
     * The max number of containers that can share a physical GPU.
     */
    maxSharedClientsPerGpu?: string;
}
