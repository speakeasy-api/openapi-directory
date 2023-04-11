import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of the Cloud SQL database.
 */
export declare enum GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    Postgres = "POSTGRES",
    Mysql = "MYSQL"
}
/**
 * Specification for the BigQuery connection to a Cloud SQL instance.
 */
export declare class GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec extends SpeakeasyBase {
    /**
     * Database name.
     */
    database?: string;
    /**
     * Cloud SQL instance ID in the format of `project:location:instance`.
     */
    instanceId?: string;
    /**
     * Type of the Cloud SQL database.
     */
    type?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpecTypeEnum;
}
