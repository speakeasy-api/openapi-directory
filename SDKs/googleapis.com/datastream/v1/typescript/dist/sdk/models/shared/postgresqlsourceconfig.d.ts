import { SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlRdbms } from "./postgresqlrdbms";
/**
 * PostgreSQL data source configuration
 */
export declare class PostgresqlSourceConfig extends SpeakeasyBase {
    /**
     * PostgreSQL database structure.
     */
    excludeObjects?: PostgresqlRdbms;
    /**
     * PostgreSQL database structure.
     */
    includeObjects?: PostgresqlRdbms;
    /**
     * Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
     */
    maxConcurrentBackfillTasks?: number;
    /**
     * Required. The name of the publication that includes the set of all tables that are defined in the stream's include_objects.
     */
    publication?: string;
    /**
     * Required. Immutable. The name of the logical replication slot that's configured with the pgoutput plugin.
     */
    replicationSlot?: string;
}
