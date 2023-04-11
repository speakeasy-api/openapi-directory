import { SpeakeasyBase } from "../../../internal/utils";
import { DailyResourceUsageAggregationStats } from "./dailyresourceusageaggregationstats";
/**
 * Statistical aggregation of memory usage.
 */
export declare class DailyResourceUsageAggregationMemory extends SpeakeasyBase {
    /**
     * Statistical aggregation of samples for a single resource usage.
     */
    utilizationPercentage?: DailyResourceUsageAggregationStats;
}
