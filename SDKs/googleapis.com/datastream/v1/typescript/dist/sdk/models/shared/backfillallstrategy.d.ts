import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";
/**
 * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
 */
export declare class BackfillAllStrategy extends SpeakeasyBase {
    /**
     * MySQL database structure
     */
    mysqlExcludedObjects?: MysqlRdbms;
    /**
     * Oracle database structure.
     */
    oracleExcludedObjects?: OracleRdbms;
    /**
     * PostgreSQL database structure.
     */
    postgresqlExcludedObjects?: PostgresqlRdbms;
}
