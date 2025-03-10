/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose } from "class-transformer";

/**
 * The type of GPU sharing strategy to enable on the GPU node.
 */
export enum GPUSharingConfigGPUSharingStrategyEnum {
  GpuSharingStrategyUnspecified = "GPU_SHARING_STRATEGY_UNSPECIFIED",
  TimeSharing = "TIME_SHARING",
}

/**
 * GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.
 */
export class GPUSharingConfig extends SpeakeasyBase {
  /**
   * The type of GPU sharing strategy to enable on the GPU node.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "gpuSharingStrategy" })
  gpuSharingStrategy?: GPUSharingConfigGPUSharingStrategyEnum;

  /**
   * The max number of containers that can share a physical GPU.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "maxSharedClientsPerGpu" })
  maxSharedClientsPerGpu?: string;
}
