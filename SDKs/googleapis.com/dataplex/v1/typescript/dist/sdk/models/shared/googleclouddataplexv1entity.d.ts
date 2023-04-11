import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1EntityCompatibilityStatus } from "./googleclouddataplexv1entitycompatibilitystatus";
import { GoogleCloudDataplexV1Schema } from "./googleclouddataplexv1schema";
import { GoogleCloudDataplexV1StorageAccess } from "./googleclouddataplexv1storageaccess";
import { GoogleCloudDataplexV1StorageFormat, GoogleCloudDataplexV1StorageFormatInput } from "./googleclouddataplexv1storageformat";
/**
 * Required. Immutable. Identifies the storage system of the entity data.
 */
export declare enum GoogleCloudDataplexV1EntitySystemEnum {
    StorageSystemUnspecified = "STORAGE_SYSTEM_UNSPECIFIED",
    CloudStorage = "CLOUD_STORAGE",
    Bigquery = "BIGQUERY"
}
/**
 * Required. Immutable. The type of entity.
 */
export declare enum GoogleCloudDataplexV1EntityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Table = "TABLE",
    Fileset = "FILESET"
}
/**
 * Represents tables and fileset metadata contained within a zone.
 */
export declare class GoogleCloudDataplexV1EntityInput extends SpeakeasyBase {
    /**
     * Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset.
     */
    asset?: string;
    /**
     * Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id.
     */
    dataPath?: string;
    /**
     * Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/** /*.csv.
     */
    dataPathPattern?: string;
    /**
     * Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters.
     */
    description?: string;
    /**
     * Optional. Display name must be shorter than or equal to 256 characters.
     */
    displayName?: string;
    /**
     * Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests.
     */
    etag?: string;
    /**
     * Describes the format of the data within its storage location.
     */
    format?: GoogleCloudDataplexV1StorageFormatInput;
    /**
     * Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores. Must begin with a letter and consist of 256 or fewer characters.
     */
    id?: string;
    /**
     * Schema information describing the structure and layout of the data.
     */
    schema?: GoogleCloudDataplexV1Schema;
    /**
     * Required. Immutable. Identifies the storage system of the entity data.
     */
    system?: GoogleCloudDataplexV1EntitySystemEnum;
    /**
     * Required. Immutable. The type of entity.
     */
    type?: GoogleCloudDataplexV1EntityTypeEnum;
}
/**
 * Represents tables and fileset metadata contained within a zone.
 */
export declare class GoogleCloudDataplexV1Entity extends SpeakeasyBase {
    /**
     * Describes the access mechanism of the data within its storage location.
     */
    access?: GoogleCloudDataplexV1StorageAccess;
    /**
     * Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset.
     */
    asset?: string;
    /**
     * Output only. The name of the associated Data Catalog entry.
     */
    catalogEntry?: string;
    /**
     * Provides compatibility information for various metadata stores.
     */
    compatibility?: GoogleCloudDataplexV1EntityCompatibilityStatus;
    /**
     * Output only. The time when the entity was created.
     */
    createTime?: string;
    /**
     * Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id.
     */
    dataPath?: string;
    /**
     * Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/** /*.csv.
     */
    dataPathPattern?: string;
    /**
     * Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters.
     */
    description?: string;
    /**
     * Optional. Display name must be shorter than or equal to 256 characters.
     */
    displayName?: string;
    /**
     * Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests.
     */
    etag?: string;
    /**
     * Describes the format of the data within its storage location.
     */
    format?: GoogleCloudDataplexV1StorageFormat;
    /**
     * Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores. Must begin with a letter and consist of 256 or fewer characters.
     */
    id?: string;
    /**
     * Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}.
     */
    name?: string;
    /**
     * Schema information describing the structure and layout of the data.
     */
    schema?: GoogleCloudDataplexV1Schema;
    /**
     * Required. Immutable. Identifies the storage system of the entity data.
     */
    system?: GoogleCloudDataplexV1EntitySystemEnum;
    /**
     * Required. Immutable. The type of entity.
     */
    type?: GoogleCloudDataplexV1EntityTypeEnum;
    /**
     * Output only. System generated unique ID for the Entity. This ID will be different if the Entity is deleted and re-created with the same name.
     */
    uid?: string;
    /**
     * Output only. The time when the entity was last updated.
     */
    updateTime?: string;
}
