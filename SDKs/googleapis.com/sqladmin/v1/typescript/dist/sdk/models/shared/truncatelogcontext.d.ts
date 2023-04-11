import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Database Instance truncate log context.
 */
export declare class TruncateLogContext extends SpeakeasyBase {
    /**
     * This is always `sql#truncateLogContext`.
     */
    kind?: string;
    /**
     * The type of log to truncate. Valid values are `MYSQL_GENERAL_TABLE` and `MYSQL_SLOW_TABLE`.
     */
    logType?: string;
}
