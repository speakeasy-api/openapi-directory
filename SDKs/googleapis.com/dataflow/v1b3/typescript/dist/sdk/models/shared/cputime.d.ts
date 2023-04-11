import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Modeled after information exposed by /proc/stat.
 */
export declare class CPUTime extends SpeakeasyBase {
    /**
     * Average CPU utilization rate (% non-idle cpu / second) since previous sample.
     */
    rate?: number;
    /**
     * Timestamp of the measurement.
     */
    timestamp?: string;
    /**
     * Total active CPU time across all cores (ie., non-idle) in milliseconds since start-up.
     */
    totalMs?: string;
}
