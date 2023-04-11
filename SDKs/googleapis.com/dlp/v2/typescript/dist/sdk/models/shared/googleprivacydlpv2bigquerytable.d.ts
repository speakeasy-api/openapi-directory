import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
 */
export declare class GooglePrivacyDlpV2BigQueryTable extends SpeakeasyBase {
    /**
     * Dataset ID of the table.
     */
    datasetId?: string;
    /**
     * The Google Cloud Platform project ID of the project containing the table. If omitted, project ID is inferred from the API call.
     */
    projectId?: string;
    /**
     * Name of the table.
     */
    tableId?: string;
}
