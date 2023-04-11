import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a set of Cloud SQL instances. Each one will be available under /cloudsql/[instance]. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run.
 */
export declare class GoogleCloudRunV2CloudSqlInstance extends SpeakeasyBase {
    /**
     * The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}
     */
    instances?: string[];
}
