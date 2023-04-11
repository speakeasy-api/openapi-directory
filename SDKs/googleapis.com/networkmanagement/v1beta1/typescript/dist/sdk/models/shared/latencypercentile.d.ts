import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Latency percentile rank and value.
 */
export declare class LatencyPercentile extends SpeakeasyBase {
    /**
     * percent-th percentile of latency observed, in microseconds. Fraction of percent/100 of samples have latency lower or equal to the value of this field.
     */
    latencyMicros?: string;
    /**
     * Percentage of samples this data point applies to.
     */
    percent?: number;
}
