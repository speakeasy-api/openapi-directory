import { SpeakeasyBase } from "../../../internal/utils";
import { LatencyPercentile } from "./latencypercentile";
/**
 * Describes measured latency distribution.
 */
export declare class LatencyDistribution extends SpeakeasyBase {
    /**
     * Representative latency percentiles.
     */
    latencyPercentiles?: LatencyPercentile[];
}
