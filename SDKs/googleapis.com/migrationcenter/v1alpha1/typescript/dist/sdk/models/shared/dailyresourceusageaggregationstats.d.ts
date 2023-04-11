import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Statistical aggregation of samples for a single resource usage.
 */
export declare class DailyResourceUsageAggregationStats extends SpeakeasyBase {
    /**
     * Average usage value.
     */
    average?: number;
    /**
     * Median usage value.
     */
    median?: number;
    /**
     * 95th percentile usage value.
     */
    ninteyFifthPercentile?: number;
    /**
     * Peak usage value.
     */
    peak?: number;
}
