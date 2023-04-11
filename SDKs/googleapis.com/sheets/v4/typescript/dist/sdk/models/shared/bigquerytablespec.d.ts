import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is allowed.
 */
export declare class BigQueryTableSpec extends SpeakeasyBase {
    /**
     * The BigQuery dataset id.
     */
    datasetId?: string;
    /**
     * The BigQuery table id.
     */
    tableId?: string;
    /**
     * The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed.
     */
    tableProjectId?: string;
}
