import { SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlSchema } from "./postgresqlschema";
/**
 * PostgreSQL database structure.
 */
export declare class PostgresqlRdbms extends SpeakeasyBase {
    /**
     * PostgreSQL schemas in the database server.
     */
    postgresqlSchemas?: PostgresqlSchema[];
}
