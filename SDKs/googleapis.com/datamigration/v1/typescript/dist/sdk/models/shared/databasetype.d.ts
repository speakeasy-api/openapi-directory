import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The database engine.
 */
export declare enum DatabaseTypeEngineEnum {
    DatabaseEngineUnspecified = "DATABASE_ENGINE_UNSPECIFIED",
    Mysql = "MYSQL",
    Postgresql = "POSTGRESQL",
    Oracle = "ORACLE"
}
/**
 * The database provider.
 */
export declare enum DatabaseTypeProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED",
    Cloudsql = "CLOUDSQL",
    Rds = "RDS",
    Aurora = "AURORA",
    Alloydb = "ALLOYDB"
}
/**
 * A message defining the database engine and provider.
 */
export declare class DatabaseType extends SpeakeasyBase {
    /**
     * The database engine.
     */
    engine?: DatabaseTypeEngineEnum;
    /**
     * The database provider.
     */
    provider?: DatabaseTypeProviderEnum;
}
