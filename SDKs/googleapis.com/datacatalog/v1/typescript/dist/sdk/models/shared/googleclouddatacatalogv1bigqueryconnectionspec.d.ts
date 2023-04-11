import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec } from "./googleclouddatacatalogv1cloudsqlbigqueryconnectionspec";
/**
 * The type of the BigQuery connection.
 */
export declare enum GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum {
    ConnectionTypeUnspecified = "CONNECTION_TYPE_UNSPECIFIED",
    CloudSql = "CLOUD_SQL"
}
/**
 * Specification for the BigQuery connection.
 */
export declare class GoogleCloudDatacatalogV1BigQueryConnectionSpec extends SpeakeasyBase {
    /**
     * Specification for the BigQuery connection to a Cloud SQL instance.
     */
    cloudSql?: GoogleCloudDatacatalogV1CloudSqlBigQueryConnectionSpec;
    /**
     * The type of the BigQuery connection.
     */
    connectionType?: GoogleCloudDatacatalogV1BigQueryConnectionSpecConnectionTypeEnum;
    /**
     * True if there are credentials attached to the BigQuery connection; false otherwise.
     */
    hasCredential?: boolean;
}
