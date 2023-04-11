import { SpeakeasyBase } from "../../../internal/utils";
import { DailyResourceUsageAggregationStats } from "./dailyresourceusageaggregationstats";
/**
 * Statistical aggregation of CPU usage.
 */
export declare class DailyResourceUsageAggregationCPU extends SpeakeasyBase {
    /**
     * Statistical aggregation of samples for a single resource usage.
     */
    utilizationPercentage?: DailyResourceUsageAggregationStats;
}
