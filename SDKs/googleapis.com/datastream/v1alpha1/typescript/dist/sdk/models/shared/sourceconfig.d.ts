import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlSourceConfig } from "./mysqlsourceconfig";
import { OracleSourceConfig } from "./oraclesourceconfig";
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
     * Required. Source connection profile identifier.
     */
    sourceConnectionProfileName?: string;
}
