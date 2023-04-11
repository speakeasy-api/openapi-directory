import { SpeakeasyBase } from "../../../internal/utils";
import { CloneDefinition } from "./clonedefinition";
import { Clustering } from "./clustering";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { ExternalDataConfiguration } from "./externaldataconfiguration";
import { MaterializedViewDefinition } from "./materializedviewdefinition";
import { ModelDefinition } from "./modeldefinition";
import { RangePartitioning } from "./rangepartitioning";
import { SnapshotDefinition } from "./snapshotdefinition";
import { Streamingbuffer } from "./streamingbuffer";
import { TableReference } from "./tablereference";
import { TableSchema } from "./tableschema";
import { TimePartitioning } from "./timepartitioning";
import { ViewDefinition } from "./viewdefinition";
/**
 * Successful response
 */
export declare class Table extends SpeakeasyBase {
    cloneDefinition?: CloneDefinition;
    clustering?: Clustering;
    /**
     * [Output-only] The time when this table was created, in milliseconds since the epoch.
     */
    creationTime?: string;
    /**
     * [Output-only] The default collation of the table.
     */
    defaultCollation?: string;
    /**
     * [Output-only] The default rounding mode of the table.
     */
    defaultRoundingMode?: string;
    /**
     * [Optional] A user-friendly description of this table.
     */
    description?: string;
    encryptionConfiguration?: EncryptionConfiguration;
    /**
     * [Output-only] A hash of the table metadata. Used to ensure there were no concurrent modifications to the resource when attempting an update. Not guaranteed to change when the table contents or the fields numRows, numBytes, numLongTermBytes or lastModifiedTime change.
     */
    etag?: string;
    /**
     * [Optional] The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed. The defaultTableExpirationMs property of the encapsulating dataset can be used to set a default expirationTime on newly created tables.
     */
    expirationTime?: string;
    externalDataConfiguration?: ExternalDataConfiguration;
    /**
     * [Optional] A descriptive name for this table.
     */
    friendlyName?: string;
    /**
     * [Output-only] An opaque ID uniquely identifying the table.
     */
    id?: string;
    /**
     * [Output-only] The type of the resource.
     */
    kind?: string;
    /**
     * The labels associated with this table. You can use these to organize and group your tables. Label keys and values can be no longer than 63 characters, can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. Label values are optional. Label keys must start with a letter and each label in the list must have a different key.
     */
    labels?: Record<string, string>;
    /**
     * [Output-only] The time when this table was last modified, in milliseconds since the epoch.
     */
    lastModifiedTime?: string;
    /**
     * [Output-only] The geographic location where the table resides. This value is inherited from the dataset.
     */
    location?: string;
    materializedView?: MaterializedViewDefinition;
    /**
     * [Optional] Max staleness of data that could be returned when table or materialized view is queried (formatted as Google SQL Interval type).
     */
    maxStaleness?: string;
    model?: ModelDefinition;
    /**
     * [Output-only] The size of this table in bytes, excluding any data in the streaming buffer.
     */
    numBytes?: string;
    /**
     * [Output-only] The number of bytes in the table that are considered "long-term storage".
     */
    numLongTermBytes?: string;
    /**
     * [Output-only] [TrustedTester] The physical size of this table in bytes, excluding any data in the streaming buffer. This includes compression and storage used for time travel.
     */
    numPhysicalBytes?: string;
    /**
     * [Output-only] The number of rows of data in this table, excluding any data in the streaming buffer.
     */
    numRows?: string;
    /**
     * [Output-only] Number of logical bytes that are less than 90 days old.
     */
    numActiveLogicalBytes?: string;
    /**
     * [Output-only] Number of physical bytes less than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numActivePhysicalBytes?: string;
    /**
     * [Output-only] Number of logical bytes that are more than 90 days old.
     */
    numLongTermLogicalBytes?: string;
    /**
     * [Output-only] Number of physical bytes more than 90 days old. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numLongTermPhysicalBytes?: string;
    /**
     * [Output-only] The number of partitions present in the table or materialized view. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numPartitions?: string;
    /**
     * [Output-only] Number of physical bytes used by time travel storage (deleted or changed data). This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numTimeTravelPhysicalBytes?: string;
    /**
     * [Output-only] Total number of logical bytes in the table or materialized view.
     */
    numTotalLogicalBytes?: string;
    /**
     * [Output-only] The physical size of this table in bytes. This also includes storage used for time travel. This data is not kept in real time, and might be delayed by a few seconds to a few minutes.
     */
    numTotalPhysicalBytes?: string;
    rangePartitioning?: RangePartitioning;
    /**
     * [Optional] If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
     */
    requirePartitionFilter?: boolean;
    schema?: TableSchema;
    /**
     * [Output-only] A URL that can be used to access this resource again.
     */
    selfLink?: string;
    snapshotDefinition?: SnapshotDefinition;
    streamingBuffer?: Streamingbuffer;
    tableReference?: TableReference;
    timePartitioning?: TimePartitioning;
    /**
     * [Output-only] Describes the table type. The following values are supported: TABLE: A normal BigQuery table. VIEW: A virtual table defined by a SQL query. SNAPSHOT: An immutable, read-only table that is a copy of another table. [TrustedTester] MATERIALIZED_VIEW: SQL query whose result is persisted. EXTERNAL: A table that references data stored in an external storage system, such as Google Cloud Storage. The default value is TABLE.
     */
    type?: string;
    view?: ViewDefinition;
}
