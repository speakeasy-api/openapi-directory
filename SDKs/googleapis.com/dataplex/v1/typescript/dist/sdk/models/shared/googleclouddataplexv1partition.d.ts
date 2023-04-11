import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents partition metadata contained within entity instances.
 */
export declare class GoogleCloudDataplexV1Partition extends SpeakeasyBase {
    /**
     * Optional. The etag for this partition.
     */
    etag?: string;
    /**
     * Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/
     */
    location?: string;
    /**
     * Output only. Partition values used in the HTTP URL must be double encoded. For example, url_encode(url_encode(value)) can be used to encode "US:CA/CA#Sunnyvale so that the request URL ends with "/partitions/US%253ACA/CA%2523Sunnyvale". The name field in the response retains the encoded format.
     */
    name?: string;
    /**
     * Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity.
     */
    values?: string[];
}
/**
 * Represents partition metadata contained within entity instances.
 */
export declare class GoogleCloudDataplexV1PartitionInput extends SpeakeasyBase {
    /**
     * Optional. The etag for this partition.
     */
    etag?: string;
    /**
     * Required. Immutable. The location of the entity data within the partition, for example, gs://bucket/path/to/entity/key1=value1/key2=value2. Or projects//datasets//tables/
     */
    location?: string;
    /**
     * Required. Immutable. The set of values representing the partition, which correspond to the partition schema defined in the parent entity.
     */
    values?: string[];
}
