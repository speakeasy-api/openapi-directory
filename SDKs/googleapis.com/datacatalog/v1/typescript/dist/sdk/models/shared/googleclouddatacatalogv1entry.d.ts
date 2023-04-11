import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1BigQueryDateShardedSpec } from "./googleclouddatacatalogv1bigquerydateshardedspec";
import { GoogleCloudDatacatalogV1BigQueryTableSpec } from "./googleclouddatacatalogv1bigquerytablespec";
import { GoogleCloudDatacatalogV1BusinessContext } from "./googleclouddatacatalogv1businesscontext";
import { GoogleCloudDatacatalogV1CloudBigtableSystemSpec } from "./googleclouddatacatalogv1cloudbigtablesystemspec";
import { GoogleCloudDatacatalogV1DatabaseTableSpec } from "./googleclouddatacatalogv1databasetablespec";
import { GoogleCloudDatacatalogV1DataSource, GoogleCloudDatacatalogV1DataSourceInput } from "./googleclouddatacatalogv1datasource";
import { GoogleCloudDatacatalogV1DataSourceConnectionSpec } from "./googleclouddatacatalogv1datasourceconnectionspec";
import { GoogleCloudDatacatalogV1FilesetSpec } from "./googleclouddatacatalogv1filesetspec";
import { GoogleCloudDatacatalogV1GcsFilesetSpec, GoogleCloudDatacatalogV1GcsFilesetSpecInput } from "./googleclouddatacatalogv1gcsfilesetspec";
import { GoogleCloudDatacatalogV1LookerSystemSpec } from "./googleclouddatacatalogv1lookersystemspec";
import { GoogleCloudDatacatalogV1PersonalDetails } from "./googleclouddatacatalogv1personaldetails";
import { GoogleCloudDatacatalogV1RoutineSpec } from "./googleclouddatacatalogv1routinespec";
import { GoogleCloudDatacatalogV1Schema } from "./googleclouddatacatalogv1schema";
import { GoogleCloudDatacatalogV1ServiceSpec } from "./googleclouddatacatalogv1servicespec";
import { GoogleCloudDatacatalogV1SqlDatabaseSystemSpec } from "./googleclouddatacatalogv1sqldatabasesystemspec";
import { GoogleCloudDatacatalogV1SystemTimestamps, GoogleCloudDatacatalogV1SystemTimestampsInput } from "./googleclouddatacatalogv1systemtimestamps";
import { GoogleCloudDatacatalogV1UsageSignal, GoogleCloudDatacatalogV1UsageSignalInput } from "./googleclouddatacatalogv1usagesignal";
/**
 * Output only. Indicates the entry's source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore.
 */
export declare enum GoogleCloudDatacatalogV1EntryIntegratedSystemEnum {
    IntegratedSystemUnspecified = "INTEGRATED_SYSTEM_UNSPECIFIED",
    Bigquery = "BIGQUERY",
    CloudPubsub = "CLOUD_PUBSUB",
    DataprocMetastore = "DATAPROC_METASTORE",
    Dataplex = "DATAPLEX",
    CloudSpanner = "CLOUD_SPANNER",
    CloudBigtable = "CLOUD_BIGTABLE",
    CloudSql = "CLOUD_SQL",
    Looker = "LOOKER"
}
/**
 * The type of the entry. Only used for entries with types listed in the `EntryType` enum. Currently, only `FILESET` enum value is allowed. All other entries created in Data Catalog must use the `user_specified_type`.
 */
export declare enum GoogleCloudDatacatalogV1EntryTypeEnum {
    EntryTypeUnspecified = "ENTRY_TYPE_UNSPECIFIED",
    Table = "TABLE",
    Model = "MODEL",
    DataStream = "DATA_STREAM",
    Fileset = "FILESET",
    Cluster = "CLUSTER",
    Database = "DATABASE",
    DataSourceConnection = "DATA_SOURCE_CONNECTION",
    Routine = "ROUTINE",
    Lake = "LAKE",
    Zone = "ZONE",
    Service = "SERVICE",
    DatabaseSchema = "DATABASE_SCHEMA",
    Dashboard = "DASHBOARD",
    Explore = "EXPLORE",
    Look = "LOOK"
}
/**
 * Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
 */
export declare class GoogleCloudDatacatalogV1Entry extends SpeakeasyBase {
    /**
     * Specification for a group of BigQuery tables with the `[prefix]YYYYMMDD` name pattern. For more information, see [Introduction to partitioned tables] (https://cloud.google.com/bigquery/docs/partitioned-tables#partitioning_versus_sharding).
     */
    bigqueryDateShardedSpec?: GoogleCloudDatacatalogV1BigQueryDateShardedSpec;
    /**
     * Describes a BigQuery table.
     */
    bigqueryTableSpec?: GoogleCloudDatacatalogV1BigQueryTableSpec;
    /**
     * Business Context of the entry.
     */
    businessContext?: GoogleCloudDatacatalogV1BusinessContext;
    /**
     * Specification that applies to all entries that are part of `CLOUD_BIGTABLE` system (user_specified_type)
     */
    cloudBigtableSystemSpec?: GoogleCloudDatacatalogV1CloudBigtableSystemSpec;
    /**
     * Physical location of an entry.
     */
    dataSource?: GoogleCloudDatacatalogV1DataSource;
    /**
     * Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later.
     */
    dataSourceConnectionSpec?: GoogleCloudDatacatalogV1DataSourceConnectionSpec;
    /**
     * Specification that applies to a table resource. Valid only for entries with the `TABLE` type.
     */
    databaseTableSpec?: GoogleCloudDatacatalogV1DatabaseTableSpec;
    /**
     * Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string.
     */
    description?: string;
    /**
     * Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string.
     */
    displayName?: string;
    /**
     * Specification that applies to a fileset. Valid only for entries with the 'FILESET' type.
     */
    filesetSpec?: GoogleCloudDatacatalogV1FilesetSpec;
    /**
     * Fully qualified name (FQN) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation and read-only afterwards. Can be used for search and lookup of the entries. FQNs take two forms: * For non-regionalized resources: `{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` * For regionalized resources: `{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` Example for a DPMS table: `dataproc_metastore:{PROJECT_ID}.{LOCATION_ID}.{INSTANCE_ID}.{DATABASE_ID}.{TABLE_ID}`
     */
    fullyQualifiedName?: string;
    /**
     * Describes a Cloud Storage fileset entry.
     */
    gcsFilesetSpec?: GoogleCloudDatacatalogV1GcsFilesetSpec;
    /**
     * Output only. Indicates the entry's source system that Data Catalog integrates with, such as BigQuery, Pub/Sub, or Dataproc Metastore.
     */
    integratedSystem?: GoogleCloudDatacatalogV1EntryIntegratedSystemEnum;
    /**
     * Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system.
     */
    labels?: Record<string, string>;
    /**
     * The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` Output only when the entry is one of the types in the `EntryType` enum. For entries with a `user_specified_type`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8.
     */
    linkedResource?: string;
    /**
     * Specification that applies to entries that are part `LOOKER` system (user_specified_type)
     */
    lookerSystemSpec?: GoogleCloudDatacatalogV1LookerSystemSpec;
    /**
     * Output only. The resource name of an entry in URL format. Note: The entry itself and its child resources might not be stored in the location specified in its name.
     */
    name?: string;
    /**
     * Entry metadata relevant only to the user and private to them.
     */
    personalDetails?: GoogleCloudDatacatalogV1PersonalDetails;
    /**
     * Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.
     */
    routineSpec?: GoogleCloudDatacatalogV1RoutineSpec;
    /**
     * Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.
     */
    schema?: GoogleCloudDatacatalogV1Schema;
    /**
     * Specification that applies to a Service resource. Valid only for entries with the `SERVICE` type.
     */
    serviceSpec?: GoogleCloudDatacatalogV1ServiceSpec;
    /**
     * Timestamps associated with this resource in a particular system.
     */
    sourceSystemTimestamps?: GoogleCloudDatacatalogV1SystemTimestamps;
    /**
     * Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type)
     */
    sqlDatabaseSystemSpec?: GoogleCloudDatacatalogV1SqlDatabaseSystemSpec;
    /**
     * The type of the entry. Only used for entries with types listed in the `EntryType` enum. Currently, only `FILESET` enum value is allowed. All other entries created in Data Catalog must use the `user_specified_type`.
     */
    type?: GoogleCloudDatacatalogV1EntryTypeEnum;
    /**
     * The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
     */
    usageSignal?: GoogleCloudDatacatalogV1UsageSignal;
    /**
     * Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The `user_specified_system` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.
     */
    userSpecifiedSystem?: string;
    /**
     * Custom entry type that doesn't match any of the values allowed for input and listed in the `EntryType` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, `my_special_type`. The `user_specified_type` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.
     */
    userSpecifiedType?: string;
}
/**
 * Entry metadata. A Data Catalog entry represents another resource in Google Cloud Platform (such as a BigQuery dataset or a Pub/Sub topic) or outside of it. You can use the `linked_resource` field in the entry resource to refer to the original resource ID of the source system. An entry resource contains resource details, for example, its schema. Additionally, you can attach flexible metadata to an entry in the form of a Tag.
 */
export declare class GoogleCloudDatacatalogV1EntryInput extends SpeakeasyBase {
    /**
     * Business Context of the entry.
     */
    businessContext?: GoogleCloudDatacatalogV1BusinessContext;
    /**
     * Specification that applies to all entries that are part of `CLOUD_BIGTABLE` system (user_specified_type)
     */
    cloudBigtableSystemSpec?: GoogleCloudDatacatalogV1CloudBigtableSystemSpec;
    /**
     * Physical location of an entry.
     */
    dataSource?: GoogleCloudDatacatalogV1DataSourceInput;
    /**
     * Specification that applies to a data source connection. Valid only for entries with the `DATA_SOURCE_CONNECTION` type. Only one of internal specs can be set at the time, and cannot be changed later.
     */
    dataSourceConnectionSpec?: GoogleCloudDatacatalogV1DataSourceConnectionSpec;
    /**
     * Specification that applies to a table resource. Valid only for entries with the `TABLE` type.
     */
    databaseTableSpec?: GoogleCloudDatacatalogV1DatabaseTableSpec;
    /**
     * Entry description that can consist of several sentences or paragraphs that describe entry contents. The description must not contain Unicode non-characters as well as C0 and C1 control codes except tabs (HT), new lines (LF), carriage returns (CR), and page breaks (FF). The maximum size is 2000 bytes when encoded in UTF-8. Default value is an empty string.
     */
    description?: string;
    /**
     * Display name of an entry. The maximum size is 500 bytes when encoded in UTF-8. Default value is an empty string.
     */
    displayName?: string;
    /**
     * Specification that applies to a fileset. Valid only for entries with the 'FILESET' type.
     */
    filesetSpec?: GoogleCloudDatacatalogV1FilesetSpec;
    /**
     * Fully qualified name (FQN) of the resource. Set automatically for entries representing resources from synced systems. Settable only during creation and read-only afterwards. Can be used for search and lookup of the entries. FQNs take two forms: * For non-regionalized resources: `{SYSTEM}:{PROJECT}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` * For regionalized resources: `{SYSTEM}:{PROJECT}.{LOCATION_ID}.{PATH_TO_RESOURCE_SEPARATED_WITH_DOTS}` Example for a DPMS table: `dataproc_metastore:{PROJECT_ID}.{LOCATION_ID}.{INSTANCE_ID}.{DATABASE_ID}.{TABLE_ID}`
     */
    fullyQualifiedName?: string;
    /**
     * Describes a Cloud Storage fileset entry.
     */
    gcsFilesetSpec?: GoogleCloudDatacatalogV1GcsFilesetSpecInput;
    /**
     * Cloud labels attached to the entry. In Data Catalog, you can create and modify labels attached only to custom entries. Synced entries have unmodifiable labels that come from the source system.
     */
    labels?: Record<string, string>;
    /**
     * The resource this metadata entry refers to. For Google Cloud Platform resources, `linked_resource` is the [Full Resource Name] (https://cloud.google.com/apis/design/resource_names#full_resource_name). For example, the `linked_resource` for a table resource from BigQuery is: `//bigquery.googleapis.com/projects/{PROJECT_ID}/datasets/{DATASET_ID}/tables/{TABLE_ID}` Output only when the entry is one of the types in the `EntryType` enum. For entries with a `user_specified_type`, this field is optional and defaults to an empty string. The resource string must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), periods (.), colons (:), slashes (/), dashes (-), and hashes (#). The maximum size is 200 bytes when encoded in UTF-8.
     */
    linkedResource?: string;
    /**
     * Specification that applies to entries that are part `LOOKER` system (user_specified_type)
     */
    lookerSystemSpec?: GoogleCloudDatacatalogV1LookerSystemSpec;
    /**
     * Entry metadata relevant only to the user and private to them.
     */
    personalDetails?: GoogleCloudDatacatalogV1PersonalDetails;
    /**
     * Specification that applies to a routine. Valid only for entries with the `ROUTINE` type.
     */
    routineSpec?: GoogleCloudDatacatalogV1RoutineSpec;
    /**
     * Represents a schema, for example, a BigQuery, GoogleSQL, or Avro schema.
     */
    schema?: GoogleCloudDatacatalogV1Schema;
    /**
     * Specification that applies to a Service resource. Valid only for entries with the `SERVICE` type.
     */
    serviceSpec?: GoogleCloudDatacatalogV1ServiceSpec;
    /**
     * Timestamps associated with this resource in a particular system.
     */
    sourceSystemTimestamps?: GoogleCloudDatacatalogV1SystemTimestampsInput;
    /**
     * Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type)
     */
    sqlDatabaseSystemSpec?: GoogleCloudDatacatalogV1SqlDatabaseSystemSpec;
    /**
     * The type of the entry. Only used for entries with types listed in the `EntryType` enum. Currently, only `FILESET` enum value is allowed. All other entries created in Data Catalog must use the `user_specified_type`.
     */
    type?: GoogleCloudDatacatalogV1EntryTypeEnum;
    /**
     * The set of all usage signals that Data Catalog stores. Note: Usually, these signals are updated daily. In rare cases, an update may fail but will be performed again on the next day.
     */
    usageSignal?: GoogleCloudDatacatalogV1UsageSignalInput;
    /**
     * Indicates the entry's source system that Data Catalog doesn't automatically integrate with. The `user_specified_system` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.
     */
    userSpecifiedSystem?: string;
    /**
     * Custom entry type that doesn't match any of the values allowed for input and listed in the `EntryType` enum. When creating an entry, first check the type values in the enum. If there are no appropriate types for the new entry, provide a custom value, for example, `my_special_type`. The `user_specified_type` string has the following limitations: * Is case insensitive. * Must begin with a letter or underscore. * Can only contain letters, numbers, and underscores. * Must be at least 1 character and at most 64 characters long.
     */
    userSpecifiedType?: string;
}
