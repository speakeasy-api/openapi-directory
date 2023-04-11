import { SpeakeasyBase } from "../../../internal/utils";
export declare enum FlagAppliesToEnum {
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
 * The type of the flag. Flags are typed to being `BOOLEAN`, `STRING`, `INTEGER` or `NONE`. `NONE` is used for flags that do not take a value, such as `skip_grant_tables`.
 */
export declare enum FlagTypeEnum {
    SqlFlagTypeUnspecified = "SQL_FLAG_TYPE_UNSPECIFIED",
    Boolean = "BOOLEAN",
    String = "STRING",
    Integer = "INTEGER",
    None = "NONE",
    MysqlTimezoneOffset = "MYSQL_TIMEZONE_OFFSET",
    Float = "FLOAT",
    RepeatedString = "REPEATED_STRING"
}
/**
 * A flag resource.
 */
export declare class Flag extends SpeakeasyBase {
    /**
     * Use this field if only certain integers are accepted. Can be combined with min_value and max_value to add additional values.
     */
    allowedIntValues?: string[];
    /**
     * For `STRING` flags, a list of strings that the value can be set to.
     */
    allowedStringValues?: string[];
    /**
     * The database version this flag applies to. Can be MySQL instances: `MYSQL_8_0`, `MYSQL_8_0_18`, `MYSQL_8_0_26`, `MYSQL_5_7`, or `MYSQL_5_6`. PostgreSQL instances: `POSTGRES_9_6`, `POSTGRES_10`, `POSTGRES_11` or `POSTGRES_12`. SQL Server instances: `SQLSERVER_2017_STANDARD`, `SQLSERVER_2017_ENTERPRISE`, `SQLSERVER_2017_EXPRESS`, `SQLSERVER_2017_WEB`, `SQLSERVER_2019_STANDARD`, `SQLSERVER_2019_ENTERPRISE`, `SQLSERVER_2019_EXPRESS`, or `SQLSERVER_2019_WEB`. See [the complete list](/sql/docs/mysql/admin-api/rest/v1/SqlDatabaseVersion).
     */
    appliesTo?: FlagAppliesToEnum[];
    /**
     * Whether or not the flag is considered in beta.
     */
    inBeta?: boolean;
    /**
     * This is always `sql#flag`.
     */
    kind?: string;
    /**
     * For `INTEGER` flags, the maximum allowed value.
     */
    maxValue?: string;
    /**
     * For `INTEGER` flags, the minimum allowed value.
     */
    minValue?: string;
    /**
     * This is the name of the flag. Flag names always use underscores, not hyphens, for example: `max_allowed_packet`
     */
    name?: string;
    /**
     * Indicates whether changing this flag will trigger a database restart. Only applicable to Second Generation instances.
     */
    requiresRestart?: boolean;
    /**
     * The type of the flag. Flags are typed to being `BOOLEAN`, `STRING`, `INTEGER` or `NONE`. `NONE` is used for flags that do not take a value, such as `skip_grant_tables`.
     */
    type?: FlagTypeEnum;
}
