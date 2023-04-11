import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AggregationInfoAggregationIntervalEnum {
    AggregationIntervalUnspecified = "AGGREGATION_INTERVAL_UNSPECIFIED",
    Daily = "DAILY",
    Monthly = "MONTHLY"
}
export declare enum AggregationInfoAggregationLevelEnum {
    AggregationLevelUnspecified = "AGGREGATION_LEVEL_UNSPECIFIED",
    Account = "ACCOUNT",
    Project = "PROJECT"
}
/**
 * Represents the aggregation level and interval for pricing of a single SKU.
 */
export declare class AggregationInfo extends SpeakeasyBase {
    /**
     * The number of intervals to aggregate over. Example: If aggregation_level is "DAILY" and aggregation_count is 14, aggregation will be over 14 days.
     */
    aggregationCount?: number;
    aggregationInterval?: AggregationInfoAggregationIntervalEnum;
    aggregationLevel?: AggregationInfoAggregationLevelEnum;
}
