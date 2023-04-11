import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The partition key for BigQuery partitioned table.
 */
export declare enum PartitionSpecPartitionKeyEnum {
    PartitionKeyUnspecified = "PARTITION_KEY_UNSPECIFIED",
    ReadTime = "READ_TIME",
    RequestTime = "REQUEST_TIME"
}
/**
 * Specifications of BigQuery partitioned table as export destination.
 */
export declare class PartitionSpec extends SpeakeasyBase {
    /**
     * The partition key for BigQuery partitioned table.
     */
    partitionKey?: PartitionSpecPartitionKeyEnum;
}
