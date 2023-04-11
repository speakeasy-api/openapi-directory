import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The partition key for BigQuery partitioned table.
 */
export declare enum GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum {
    PartitionKeyUnspecified = "PARTITION_KEY_UNSPECIFIED",
    ReadTime = "READ_TIME",
    RequestTime = "REQUEST_TIME"
}
/**
 * Specifications of BigQuery partitioned table as export destination.
 */
export declare class GoogleCloudAssetV1p7beta1PartitionSpec extends SpeakeasyBase {
    /**
     * The partition key for BigQuery partitioned table.
     */
    partitionKey?: GoogleCloudAssetV1p7beta1PartitionSpecPartitionKeyEnum;
}
