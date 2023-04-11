import { SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlColumn } from "./postgresqlcolumn";
/**
 * PostgreSQL table.
 */
export declare class PostgresqlTable extends SpeakeasyBase {
    /**
     * PostgreSQL columns in the schema. When unspecified as part of include/exclude objects, includes/excludes everything.
     */
    postgresqlColumns?: PostgresqlColumn[];
    /**
     * Table name.
     */
    table?: string;
}
