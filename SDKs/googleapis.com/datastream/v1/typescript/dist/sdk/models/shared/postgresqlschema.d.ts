import { SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlTable } from "./postgresqltable";
/**
 * PostgreSQL schema.
 */
export declare class PostgresqlSchema extends SpeakeasyBase {
    /**
     * Tables in the schema.
     */
    postgresqlTables?: PostgresqlTable[];
    /**
     * Schema name.
     */
    schema?: string;
}
