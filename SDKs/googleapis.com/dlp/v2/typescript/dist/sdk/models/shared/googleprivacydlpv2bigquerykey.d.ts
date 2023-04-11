import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
/**
 * Row key for identifying a record in BigQuery table.
 */
export declare class GooglePrivacyDlpV2BigQueryKey extends SpeakeasyBase {
    /**
     * Row number inferred at the time the table was scanned. This value is nondeterministic, cannot be queried, and may be null for inspection jobs. To locate findings within a table, specify `inspect_job.storage_config.big_query_options.identifying_fields` in `CreateDlpJobRequest`.
     */
    rowNumber?: string;
    /**
     * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
     */
    tableReference?: GooglePrivacyDlpV2BigQueryTable;
}
