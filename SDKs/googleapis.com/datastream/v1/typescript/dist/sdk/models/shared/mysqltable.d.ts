import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlColumn } from "./mysqlcolumn";
/**
 * MySQL table.
 */
export declare class MysqlTable extends SpeakeasyBase {
    /**
     * MySQL columns in the database. When unspecified as part of include/exclude objects, includes/excludes everything.
     */
    mysqlColumns?: MysqlColumn[];
    /**
     * Table name.
     */
    table?: string;
}
