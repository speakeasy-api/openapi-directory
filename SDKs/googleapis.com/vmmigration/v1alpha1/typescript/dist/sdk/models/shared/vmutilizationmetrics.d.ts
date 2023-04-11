import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Utilization metrics values for a single VM.
 */
export declare class VmUtilizationMetrics extends SpeakeasyBase {
    /**
     * Average CPU usage, percent.
     */
    cpuAverage?: number;
    /**
     * Average CPU usage, percent.
     */
    cpuAveragePercent?: number;
    /**
     * Max CPU usage, percent.
     */
    cpuMax?: number;
    /**
     * Max CPU usage, percent.
     */
    cpuMaxPercent?: number;
    /**
     * Average disk IO rate, in kilobytes per second.
     */
    diskIoRateAverage?: string;
    /**
     * Average disk IO rate, in kilobytes per second.
     */
    diskIoRateAverageKbps?: string;
    /**
     * Max disk IO rate, in kilobytes per second.
     */
    diskIoRateMax?: string;
    /**
     * Max disk IO rate, in kilobytes per second.
     */
    diskIoRateMaxKbps?: string;
    /**
     * Average memory usage, percent.
     */
    memoryAverage?: number;
    /**
     * Average memory usage, percent.
     */
    memoryAveragePercent?: number;
    /**
     * Max memory usage, percent.
     */
    memoryMax?: number;
    /**
     * Max memory usage, percent.
     */
    memoryMaxPercent?: number;
    /**
     * Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second.
     */
    networkThroughputAverage?: string;
    /**
     * Average network throughput (combined transmit-rates and receive-rates), in kilobytes per second.
     */
    networkThroughputAverageKbps?: string;
    /**
     * Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second.
     */
    networkThroughputMax?: string;
    /**
     * Max network throughput (combined transmit-rates and receive-rates), in kilobytes per second.
     */
    networkThroughputMaxKbps?: string;
}
