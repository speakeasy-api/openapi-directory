import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of the database.
 */
export declare enum DatabaseDumpDatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Mysql = "MYSQL"
}
/**
 * Optional. The type of the database dump. If unspecified, defaults to MYSQL.
 */
export declare enum DatabaseDumpTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Mysql = "MYSQL",
    Avro = "AVRO"
}
/**
 * A specification of the location of and metadata about a database dump from a relational database management system.
 */
export declare class DatabaseDump extends SpeakeasyBase {
    /**
     * The type of the database.
     */
    databaseType?: DatabaseDumpDatabaseTypeEnum;
    /**
     * A Cloud Storage object or folder URI that specifies the source from which to import metadata. It must begin with gs://.
     */
    gcsUri?: string;
    /**
     * The name of the source database.
     */
    sourceDatabase?: string;
    /**
     * Optional. The type of the database dump. If unspecified, defaults to MYSQL.
     */
    type?: DatabaseDumpTypeEnum;
}
