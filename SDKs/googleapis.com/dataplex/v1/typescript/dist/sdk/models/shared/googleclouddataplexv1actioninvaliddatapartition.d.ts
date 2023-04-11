import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The issue type of InvalidDataPartition.
 */
export declare enum GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum {
    PartitionStructureUnspecified = "PARTITION_STRUCTURE_UNSPECIFIED",
    ConsistentKeys = "CONSISTENT_KEYS",
    HiveStyleKeys = "HIVE_STYLE_KEYS"
}
/**
 * Action details for invalid or unsupported partitions detected by discovery.
 */
export declare class GoogleCloudDataplexV1ActionInvalidDataPartition extends SpeakeasyBase {
    /**
     * The issue type of InvalidDataPartition.
     */
    expectedStructure?: GoogleCloudDataplexV1ActionInvalidDataPartitionExpectedStructureEnum;
}
