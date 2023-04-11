/**
 * Dimension over which to aggregate usage records. Can be: `sim`, `fleet`, `network`, `isoCountry`. Default is to not aggregate across any of these dimensions, UsageRecords will be aggregated into the time buckets described by the `Granularity` parameter.
 */
export declare enum UsageRecordEnumGroupEnum {
    Sim = "sim",
    Fleet = "fleet",
    Network = "network",
    IsoCountry = "isoCountry"
}
