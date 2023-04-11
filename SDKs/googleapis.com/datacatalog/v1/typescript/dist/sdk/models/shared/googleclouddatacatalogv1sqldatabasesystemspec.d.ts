import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification that applies to entries that are part `SQL_DATABASE` system (user_specified_type)
 */
export declare class GoogleCloudDatacatalogV1SqlDatabaseSystemSpec extends SpeakeasyBase {
    /**
     * Version of the database engine.
     */
    databaseVersion?: string;
    /**
     * Host of the SQL database enum InstanceHost { UNDEFINED = 0; SELF_HOSTED = 1; CLOUD_SQL = 2; AMAZON_RDS = 3; AZURE_SQL = 4; } Host of the enclousing database instance.
     */
    instanceHost?: string;
    /**
     * SQL Database Engine. enum SqlEngine { UNDEFINED = 0; MY_SQL = 1; POSTGRE_SQL = 2; SQL_SERVER = 3; } Engine of the enclosing database instance.
     */
    sqlEngine?: string;
}
