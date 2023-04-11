import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlTable } from "./mysqltable";
/**
 * MySQL database.
 */
export declare class MysqlDatabase extends SpeakeasyBase {
    /**
     * Database name.
     */
    database?: string;
    /**
     * Tables in the database.
     */
    mysqlTables?: MysqlTable[];
}
