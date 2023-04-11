import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
/**
 * MySQL source configuration
 */
export declare class MysqlSourceConfig extends SpeakeasyBase {
    /**
     * MySQL database structure
     */
    excludeObjects?: MysqlRdbms;
    /**
     * MySQL database structure
     */
    includeObjects?: MysqlRdbms;
    /**
     * Maximum number of concurrent backfill tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
     */
    maxConcurrentBackfillTasks?: number;
    /**
     * Maximum number of concurrent CDC tasks. The number should be non negative. If not set (or set to 0), the system's default value will be used.
     */
    maxConcurrentCdcTasks?: number;
}
