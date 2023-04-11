import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
/**
 * MySQL source configuration
 */
export declare class MysqlSourceConfig extends SpeakeasyBase {
    /**
     * MySQL database structure
     */
    allowlist?: MysqlRdbms;
    /**
     * MySQL database structure
     */
    rejectlist?: MysqlRdbms;
}
