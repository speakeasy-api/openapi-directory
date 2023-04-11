import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the memory usage of a worker or a container within a worker.
 */
export declare class MemInfo extends SpeakeasyBase {
    /**
     * Instantenous memory limit in bytes.
     */
    currentLimitBytes?: string;
    /**
     * Number of Out of Memory (OOM) events recorded since the previous measurement.
     */
    currentOoms?: string;
    /**
     * Instantenous memory (RSS) size in bytes.
     */
    currentRssBytes?: string;
    /**
     * Timestamp of the measurement.
     */
    timestamp?: string;
    /**
     * Total memory (RSS) usage since start up in GB * ms.
     */
    totalGbMs?: string;
}
