import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. Engine type.
 */
export declare enum DatabaseEngineInfoEngineEnum {
    DatabaseEngineUnspecified = "DATABASE_ENGINE_UNSPECIFIED",
    Mysql = "MYSQL",
    Postgresql = "POSTGRESQL",
    Oracle = "ORACLE"
}
/**
 * The type and version of a source or destination database.
 */
export declare class DatabaseEngineInfo extends SpeakeasyBase {
    /**
     * Required. Engine type.
     */
    engine?: DatabaseEngineInfoEngineEnum;
    /**
     * Required. Engine named version, for example 12.c.1.
     */
    version?: string;
}
