/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { CpuUsageSample } from "./cpuusagesample";
import { DiskUsageSample } from "./diskusagesample";
import { MemoryUsageSample } from "./memoryusagesample";
import { NetworkUsageSample } from "./networkusagesample";
import { Expose, Type } from "class-transformer";

/**
 * Performance data sample.
 */
export class PerformanceSample extends SpeakeasyBase {
  /**
   * CPU usage sample.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "cpu" })
  @Type(() => CpuUsageSample)
  cpu?: CpuUsageSample;

  /**
   * Disk usage sample. Values are across all disks.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "disk" })
  @Type(() => DiskUsageSample)
  disk?: DiskUsageSample;

  /**
   * Memory usage sample.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "memory" })
  @Type(() => MemoryUsageSample)
  memory?: MemoryUsageSample;

  /**
   * Network usage sample. Values are across all network interfaces.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "network" })
  @Type(() => NetworkUsageSample)
  network?: NetworkUsageSample;

  /**
   * Time the sample was collected.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "sampleTime" })
  sampleTime?: string;
}
