import { SpeakeasyBase } from "../../../internal/utils";
import { CpuUsageSample } from "./cpuusagesample";
import { DiskUsageSample } from "./diskusagesample";
import { MemoryUsageSample } from "./memoryusagesample";
import { NetworkUsageSample } from "./networkusagesample";
/**
 * Performance data sample.
 */
export declare class PerformanceSample extends SpeakeasyBase {
    /**
     * CPU usage sample.
     */
    cpu?: CpuUsageSample;
    /**
     * Disk usage sample. Values are across all disks.
     */
    disk?: DiskUsageSample;
    /**
     * Memory usage sample.
     */
    memory?: MemoryUsageSample;
    /**
     * Network usage sample. Values are across all network interfaces.
     */
    network?: NetworkUsageSample;
    /**
     * Time the sample was collected.
     */
    sampleTime?: string;
}
