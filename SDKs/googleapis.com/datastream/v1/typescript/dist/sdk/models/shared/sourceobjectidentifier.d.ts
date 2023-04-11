import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlObjectIdentifier } from "./mysqlobjectidentifier";
import { OracleObjectIdentifier } from "./oracleobjectidentifier";
import { PostgresqlObjectIdentifier } from "./postgresqlobjectidentifier";
/**
 * Represents an identifier of an object in the data source.
 */
export declare class SourceObjectIdentifier extends SpeakeasyBase {
    /**
     * Mysql data source object identifier.
     */
    mysqlIdentifier?: MysqlObjectIdentifier;
    /**
     * Oracle data source object identifier.
     */
    oracleIdentifier?: OracleObjectIdentifier;
    /**
     * PostgreSQL data source object identifier.
     */
    postgresqlIdentifier?: PostgresqlObjectIdentifier;
}
