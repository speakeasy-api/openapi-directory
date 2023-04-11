import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
/**
 * Config for storing transformation details.
 */
export declare class GooglePrivacyDlpV2TransformationDetailsStorageConfig extends SpeakeasyBase {
    /**
     * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
     */
    table?: GooglePrivacyDlpV2BigQueryTable;
}
