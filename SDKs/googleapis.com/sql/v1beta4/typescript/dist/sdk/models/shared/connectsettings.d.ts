import { SpeakeasyBase } from "../../../internal/utils";
import { IpMapping } from "./ipmapping";
import { SslCert } from "./sslcert";
/**
 * `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.
 */
export declare enum ConnectSettingsBackendTypeEnum {
    SqlBackendTypeUnspecified = "SQL_BACKEND_TYPE_UNSPECIFIED",
    FirstGen = "FIRST_GEN",
    SecondGen = "SECOND_GEN",
    External = "EXTERNAL"
}
/**
 * The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. MySQL instances: `MYSQL_8_0`, `MYSQL_5_7` (default), or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12` (default), `POSTGRES_13`, or `POSTGRES_14`. SQL Server instances: `SQLSERVER_2017_STANDARD` (default), `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`.
 */
export declare enum ConnectSettingsDatabaseVersionEnum {
    SqlDatabaseVersionUnspecified = "SQL_DATABASE_VERSION_UNSPECIFIED",
    Mysql51 = "MYSQL_5_1",
    Mysql55 = "MYSQL_5_5",
    Mysql56 = "MYSQL_5_6",
    Mysql57 = "MYSQL_5_7",
    Sqlserver2017Standard = "SQLSERVER_2017_STANDARD",
    Sqlserver2017Enterprise = "SQLSERVER_2017_ENTERPRISE",
    Sqlserver2017Express = "SQLSERVER_2017_EXPRESS",
    Sqlserver2017Web = "SQLSERVER_2017_WEB",
    Postgres96 = "POSTGRES_9_6",
    Postgres10 = "POSTGRES_10",
    Postgres11 = "POSTGRES_11",
    Postgres12 = "POSTGRES_12",
    Postgres13 = "POSTGRES_13",
    Postgres14 = "POSTGRES_14",
    Mysql80 = "MYSQL_8_0",
    Mysql8018 = "MYSQL_8_0_18",
    Mysql8026 = "MYSQL_8_0_26",
    Mysql8027 = "MYSQL_8_0_27",
    Mysql8028 = "MYSQL_8_0_28",
    Mysql8029 = "MYSQL_8_0_29",
    Mysql8030 = "MYSQL_8_0_30",
    Mysql8031 = "MYSQL_8_0_31",
    Mysql8032 = "MYSQL_8_0_32",
    Sqlserver2019Standard = "SQLSERVER_2019_STANDARD",
    Sqlserver2019Enterprise = "SQLSERVER_2019_ENTERPRISE",
    Sqlserver2019Express = "SQLSERVER_2019_EXPRESS",
    Sqlserver2019Web = "SQLSERVER_2019_WEB"
}
/**
 * Connect settings retrieval response.
 */
export declare class ConnectSettings extends SpeakeasyBase {
    /**
     * `SECOND_GEN`: Cloud SQL database instance. `EXTERNAL`: A database server that is not managed by Google. This property is read-only; use the `tier` property in the `settings` object to determine the database type.
     */
    backendType?: ConnectSettingsBackendTypeEnum;
    /**
     * The database engine type and version. The `databaseVersion` field cannot be changed after instance creation. MySQL instances: `MYSQL_8_0`, `MYSQL_5_7` (default), or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12` (default), `POSTGRES_13`, or `POSTGRES_14`. SQL Server instances: `SQLSERVER_2017_STANDARD` (default), `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`.
     */
    databaseVersion?: ConnectSettingsDatabaseVersionEnum;
    /**
     * The assigned IP addresses for the instance.
     */
    ipAddresses?: IpMapping[];
    /**
     * This is always `sql#connectSettings`.
     */
    kind?: string;
    /**
     * The cloud region for the instance. e.g. `us-central1`, `europe-west1`. The region cannot be changed after instance creation.
     */
    region?: string;
    /**
     * SslCerts Resource
     */
    serverCaCert?: SslCert;
}
