import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Can only be specified if VPC flow logging for this subnetwork is enabled. Toggles the aggregation interval for collecting flow logs. Increasing the interval time will reduce the amount of generated flow logs for long lasting connections. Default is an interval of 5 seconds per connection.
 */
export declare enum SubnetworkLogConfigAggregationIntervalEnum {
    Interval10Min = "INTERVAL_10_MIN",
    Interval15Min = "INTERVAL_15_MIN",
    Interval1Min = "INTERVAL_1_MIN",
    Interval30Sec = "INTERVAL_30_SEC",
    Interval5Min = "INTERVAL_5_MIN",
    Interval5Sec = "INTERVAL_5_SEC"
}
/**
 * Can only be specified if VPC flow logs for this subnetwork is enabled. Configures whether all, none or a subset of metadata fields should be added to the reported VPC flow logs. Default is EXCLUDE_ALL_METADATA.
 */
export declare enum SubnetworkLogConfigMetadataEnum {
    CustomMetadata = "CUSTOM_METADATA",
    ExcludeAllMetadata = "EXCLUDE_ALL_METADATA",
    IncludeAllMetadata = "INCLUDE_ALL_METADATA"
}
/**
 * The available logging options for this subnetwork.
 */
export declare class SubnetworkLogConfig extends SpeakeasyBase {
    /**
     * Can only be specified if VPC flow logging for this subnetwork is enabled. Toggles the aggregation interval for collecting flow logs. Increasing the interval time will reduce the amount of generated flow logs for long lasting connections. Default is an interval of 5 seconds per connection.
     */
    aggregationInterval?: SubnetworkLogConfigAggregationIntervalEnum;
    /**
     * Whether to enable flow logging for this subnetwork. If this field is not explicitly set, it will not appear in get listings. If not set the default behavior is determined by the org policy, if there is no org policy specified, then it will default to disabled.
     */
    enable?: boolean;
    /**
     * Can only be specified if VPC flow logs for this subnetwork is enabled. The filter expression is used to define which VPC flow logs should be exported to Cloud Logging.
     */
    filterExpr?: string;
    /**
     * Can only be specified if VPC flow logging for this subnetwork is enabled. The value of the field must be in [0, 1]. Set the sampling rate of VPC flow logs within the subnetwork where 1.0 means all collected logs are reported and 0.0 means no logs are reported. Default is 0.5 unless otherwise specified by the org policy, which means half of all collected logs are reported.
     */
    flowSampling?: number;
    /**
     * Can only be specified if VPC flow logs for this subnetwork is enabled. Configures whether all, none or a subset of metadata fields should be added to the reported VPC flow logs. Default is EXCLUDE_ALL_METADATA.
     */
    metadata?: SubnetworkLogConfigMetadataEnum;
    /**
     * Can only be specified if VPC flow logs for this subnetwork is enabled and "metadata" was set to CUSTOM_METADATA.
     */
    metadataFields?: string[];
}
