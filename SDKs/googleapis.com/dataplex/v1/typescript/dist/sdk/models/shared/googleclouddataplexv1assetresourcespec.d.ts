import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets.
 */
export declare enum GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum {
    AccessModeUnspecified = "ACCESS_MODE_UNSPECIFIED",
    Direct = "DIRECT",
    Managed = "MANAGED"
}
/**
 * Required. Immutable. Type of resource.
 */
export declare enum GoogleCloudDataplexV1AssetResourceSpecTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    StorageBucket = "STORAGE_BUCKET",
    BigqueryDataset = "BIGQUERY_DATASET"
}
/**
 * Identifies the cloud resource that is referenced by this asset.
 */
export declare class GoogleCloudDataplexV1AssetResourceSpec extends SpeakeasyBase {
    /**
     * Immutable. Relative name of the cloud resource that contains the data that is being managed within a lake. For example: projects/{project_number}/buckets/{bucket_id} projects/{project_number}/datasets/{dataset_id}
     */
    name?: string;
    /**
     * Optional. Determines how read permissions are handled for each asset and their associated tables. Only available to storage buckets assets.
     */
    readAccessMode?: GoogleCloudDataplexV1AssetResourceSpecReadAccessModeEnum;
    /**
     * Required. Immutable. Type of resource.
     */
    type?: GoogleCloudDataplexV1AssetResourceSpecTypeEnum;
}
