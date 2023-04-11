import { SpeakeasyBase } from "../../../internal/utils";
import { DailyResourceUsageAggregationStats } from "./dailyresourceusageaggregationstats";
/**
 * Statistical aggregation of network usage.
 */
export declare class DailyResourceUsageAggregationNetwork extends SpeakeasyBase {
    /**
     * Statistical aggregation of samples for a single resource usage.
     */
    egressBps?: DailyResourceUsageAggregationStats;
    /**
     * Statistical aggregation of samples for a single resource usage.
     */
    ingressBps?: DailyResourceUsageAggregationStats;
}
