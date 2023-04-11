/**
 * Time-based grouping that UsageRecords should be aggregated by. Can be: `hour`, `day`, or `all`. Default is `all`. `all` returns one UsageRecord that describes the usage for the entire period.
 */
export declare enum UsageRecordEnumGranularityEnum {
    Hour = "hour",
    Day = "day",
    All = "all"
}
