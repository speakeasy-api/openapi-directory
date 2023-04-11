import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec } from "./googleclouddatacatalogv1beta1bigquerydateshardedspec";
import { GoogleCloudDatacatalogV1beta1BigQueryTableSpec } from "./googleclouddatacatalogv1beta1bigquerytablespec";
import { GoogleCloudDatacatalogV1beta1GcsFilesetSpec, GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput } from "./googleclouddatacatalogv1beta1gcsfilesetspec";
import { GoogleCloudDatacatalogV1beta1Schema } from "./googleclouddatacatalogv1beta1schema";
import { GoogleCloudDatacatalogV1beta1SystemTimestamps, GoogleCloudDatacatalogV1beta1SystemTimestampsInput } from "./googleclouddatacatalogv1beta1systemtimestamps";
import { GoogleCloudDatacatalogV1beta1UsageSignal } from "./googleclouddatacatalogv1beta1usagesignal";
/**
 * Output only. This field indicates the entry's source system that Data Catalog integrates with, such as BigQuery or Pub/Sub.
 */
export declare enum GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB"
}
/**
 * The type of the entry. Only used for Entries with types in the EntryType enum.
 */
export declare enum GoogleCloudDatacatalogV1beta1EntryTypeEnum {
    EntryTypeUnspecified = "ENTRY_TYPE_UNSPECIFIED",
    Table = "TABLE",
    Model = "MODEL",
    DataStream = "DATA_STREAM",
    Fileset = "FILESET"
}
/**
 * Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
 */
export declare class GoogleCloudDatacatalogV1beta1Entry extends SpeakeasyBase {
    /**
     * Spec for a group of BigQuery tables with name pattern `[prefix]YYYYMMDD`. Context: https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding
     */
    bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1beta1BigQueryDateShardedSpec;
    /**
     * Describes a BigQuery table.
     */
    bigqueryTableSpec?: GoogleCloudDatacatalogV1beta1BigQueryTableSpec;
    /**
     * Entry description, which can consist of several sentences or paragraphs that describe entry contents. Default value is an empty string.
     */
    description?: string;
    /**
     * Display information such as title and description. A short name to identify the entry, for example, "Analytics Data - Jan 2011". Default value is an empty string.
     */
    displayName?: string;
    /**
     * Describes a Cloud Storage fileset entry.
     */
    gcsFilesetSpec?: GoogleCloudDatacatalogV1beta1GcsFilesetSpec;
    /**
     * Output only. This field indicates the entry's source system that Data Catalog integrates with, such as BigQuery or Pub/Sub.
     */
    integratedSystem?: GoogleCloudDatacatalogV1beta1EntryIntegratedSystemEnum;
    /**
     * The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [full name of the resource](https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty string.
     */
    linkedResource?: string;
    /**
     * Output only. The Data Catalog resource name of the entry in URL format. Example: * projects/{project_id}/locations/{location}/entryGroups/{entry_group_id}/entries/{entry_id} Note that this Entry and its child resources may not actually be stored in the location in this name.
     */
    name?: string;
    /**
     * Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
     */
    schema?: GoogleCloudDatacatalogV1beta1Schema;
    /**
     * Timestamps about this resource according to a particular system.
     */
    sourceSystemTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestamps;
    /**
     * The type of the entry. Only used for Entries with types in the EntryType enum.
     */
    type?: GoogleCloudDatacatalogV1beta1EntryTypeEnum;
    /**
     * The set of all usage signals that we store in Data Catalog.
     */
    usageSignal?: GoogleCloudDatacatalogV1beta1UsageSignal;
    /**
     * This field indicates the entry's source system that Data Catalog does not integrate with. `user_specified_system` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
     */
    userSpecifiedSystem?: string;
    /**
     * Entry type if it does not fit any of the input-allowed values listed in `EntryType` enum above. When creating an entry, users should check the enum values first, if nothing matches the entry to be created, then provide a custom value, for example "my_special_type". `user_specified_type` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use `user_specified_type`.
     */
    userSpecifiedType?: string;
}
/**
 * Entry Metadata. A Data Catalog Entry resource represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic), or outside of Google Cloud Platform. Clients can use the `linked_resource` field in the Entry resource to refer to the original resource ID of the source system. An Entry resource contains resource details, such as its schema. An Entry can also be used to attach flexible metadata, such as a Tag.
 */
export declare class GoogleCloudDatacatalogV1beta1EntryInput extends SpeakeasyBase {
    /**
     * Entry description, which can consist of several sentences or paragraphs that describe entry contents. Default value is an empty string.
     */
    description?: string;
    /**
     * Display information such as title and description. A short name to identify the entry, for example, "Analytics Data - Jan 2011". Default value is an empty string.
     */
    displayName?: string;
    /**
     * Describes a Cloud Storage fileset entry.
     */
    gcsFilesetSpec?: GoogleCloudDatacatalogV1beta1GcsFilesetSpecInput;
    /**
     * The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [full name of the resource](https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: * //bigquery.googleapis.com/projects/projectId/datasets/datasetId/tables/tableId Output only when Entry is of type in the EntryType enum. For entries with user_specified_type, this field is optional and defaults to an empty string.
     */
    linkedResource?: string;
    /**
     * Represents a schema (e.g. BigQuery, GoogleSQL, Avro schema).
     */
    schema?: GoogleCloudDatacatalogV1beta1Schema;
    /**
     * Timestamps about this resource according to a particular system.
     */
    sourceSystemTimestamps?: GoogleCloudDatacatalogV1beta1SystemTimestampsInput;
    /**
     * The type of the entry. Only used for Entries with types in the EntryType enum.
     */
    type?: GoogleCloudDatacatalogV1beta1EntryTypeEnum;
    /**
     * The set of all usage signals that we store in Data Catalog.
     */
    usageSignal?: GoogleCloudDatacatalogV1beta1UsageSignal;
    /**
     * This field indicates the entry's source system that Data Catalog does not integrate with. `user_specified_system` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long.
     */
    userSpecifiedSystem?: string;
    /**
     * Entry type if it does not fit any of the input-allowed values listed in `EntryType` enum above. When creating an entry, users should check the enum values first, if nothing matches the entry to be created, then provide a custom value, for example "my_special_type". `user_specified_type` strings must begin with a letter or underscore and can only contain letters, numbers, and underscores; are case insensitive; must be at least 1 character and at most 64 characters long. Currently, only FILESET enum value is allowed. All other entries created through Data Catalog must use `user_specified_type`.
     */
    userSpecifiedType?: string;
}
