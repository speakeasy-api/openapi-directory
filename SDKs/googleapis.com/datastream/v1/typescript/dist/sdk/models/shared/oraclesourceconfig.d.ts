import { SpeakeasyBase } from "../../../internal/utils";
import { OracleRdbms } from "./oraclerdbms";
/**
 * Oracle data source configuration
 */
export declare class OracleSourceConfig extends SpeakeasyBase {
    /**
     * Configuration to drop large object values.
     */
    dropLargeObjects?: Record<string, any>;
    /**
     * Oracle database structure.
     */
    excludeObjects?: OracleRdbms;
    /**
     * Oracle database structure.
     */
    includeObjects?: OracleRdbms;
    /**
     * Maximum number of concurrent backfill tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.
     */
    maxConcurrentBackfillTasks?: number;
    /**
     * Maximum number of concurrent CDC tasks. The number should be non-negative. If not set (or set to 0), the system's default value is used.
     */
    maxConcurrentCdcTasks?: number;
    /**
     * Configuration to stream large object values.
     */
    streamLargeObjects?: Record<string, any>;
}
