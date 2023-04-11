import { SpeakeasyBase } from "../../../internal/utils";
import { ClusterState } from "./clusterstate";
import { ColumnFamily } from "./columnfamily";
import { RestoreInfo, RestoreInfoInput } from "./restoreinfo";
import { TableStats } from "./tablestats";
/**
 * Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`.
 */
export declare enum TableGranularityEnum {
    TimestampGranularityUnspecified = "TIMESTAMP_GRANULARITY_UNSPECIFIED",
    Millis = "MILLIS"
}
/**
 * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
 */
export declare class TableInput extends SpeakeasyBase {
    /**
     * The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `STATS_VIEW`, `FULL`
     */
    columnFamilies?: Record<string, ColumnFamily>;
    /**
     * Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs.
     */
    deletionProtection?: boolean;
    /**
     * Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`.
     */
    granularity?: TableGranularityEnum;
    /**
     * The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`
     */
    name?: string;
    /**
     * Information about a table restore.
     */
    restoreInfo?: RestoreInfoInput;
    /**
     * Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified.
     */
    stats?: TableStats;
}
/**
 * A collection of user data indexed by row, column, and timestamp. Each table is served using the resources of its parent cluster.
 */
export declare class Table extends SpeakeasyBase {
    /**
     * Output only. Map from cluster ID to per-cluster table state. If it could not be determined whether or not the table has data in a particular cluster (for example, if its zone is unavailable), then there will be an entry for the cluster with UNKNOWN `replication_status`. Views: `REPLICATION_VIEW`, `ENCRYPTION_VIEW`, `FULL`
     */
    clusterStates?: Record<string, ClusterState>;
    /**
     * The column families configured for this table, mapped by column family ID. Views: `SCHEMA_VIEW`, `STATS_VIEW`, `FULL`
     */
    columnFamilies?: Record<string, ColumnFamily>;
    /**
     * Set to true to make the table protected against data loss. i.e. deleting the following resources through Admin APIs are prohibited: * The table. * The column families in the table. * The instance containing the table. Note one can still delete the data stored in the table through Data APIs.
     */
    deletionProtection?: boolean;
    /**
     * Immutable. The granularity (i.e. `MILLIS`) at which timestamps are stored in this table. Timestamps not matching the granularity will be rejected. If unspecified at creation time, the value will be set to `MILLIS`. Views: `SCHEMA_VIEW`, `FULL`.
     */
    granularity?: TableGranularityEnum;
    /**
     * The unique name of the table. Values are of the form `projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*`. Views: `NAME_ONLY`, `SCHEMA_VIEW`, `REPLICATION_VIEW`, `STATS_VIEW`, `FULL`
     */
    name?: string;
    /**
     * Information about a table restore.
     */
    restoreInfo?: RestoreInfo;
    /**
     * Approximate statistics related to a table. These statistics are calculated infrequently, while simultaneously, data in the table can change rapidly. Thus the values reported here (e.g. row count) are very likely out-of date, even the instant they are received in this API. Thus, only treat these values as approximate. IMPORTANT: Everything below is approximate, unless otherwise specified.
     */
    stats?: TableStats;
}
