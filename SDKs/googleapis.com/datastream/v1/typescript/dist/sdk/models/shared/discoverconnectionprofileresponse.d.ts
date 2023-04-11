import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";
/**
 * Response from a discover request.
 */
export declare class DiscoverConnectionProfileResponse extends SpeakeasyBase {
    /**
     * MySQL database structure
     */
    mysqlRdbms?: MysqlRdbms;
    /**
     * Oracle database structure.
     */
    oracleRdbms?: OracleRdbms;
    /**
     * PostgreSQL database structure.
     */
    postgresqlRdbms?: PostgresqlRdbms;
}
