import { SpeakeasyBase } from "../../../internal/utils";
import { BigQueryQuerySpec } from "./bigqueryqueryspec";
import { BigQueryTableSpec } from "./bigquerytablespec";
/**
 * The specification of a BigQuery data source that's connected to a sheet.
 */
export declare class BigQueryDataSourceSpec extends SpeakeasyBase {
    /**
     * The ID of a BigQuery enabled GCP project with a billing account attached. For any queries executed against the data source, the project is charged.
     */
    projectId?: string;
    /**
     * Specifies a custom BigQuery query.
     */
    querySpec?: BigQueryQuerySpec;
    /**
     * Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) is allowed.
     */
    tableSpec?: BigQueryTableSpec;
}
