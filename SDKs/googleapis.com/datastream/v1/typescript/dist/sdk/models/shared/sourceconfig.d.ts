import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlSourceConfig } from "./mysqlsourceconfig";
import { OracleSourceConfig } from "./oraclesourceconfig";
import { PostgresqlSourceConfig } from "./postgresqlsourceconfig";
/**
 * The configuration of the stream source.
 */
export declare class SourceConfig extends SpeakeasyBase {
    /**
     * MySQL source configuration
     */
    mysqlSourceConfig?: MysqlSourceConfig;
    /**
     * Oracle data source configuration
     */
    oracleSourceConfig?: OracleSourceConfig;
    /**
     * PostgreSQL data source configuration
     */
    postgresqlSourceConfig?: PostgresqlSourceConfig;
    /**
     * Required. Source connection profile resoource. Format: `projects/{project}/locations/{location}/connectionProfiles/{name}`
     */
    sourceConnectionProfile?: string;
}
