import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
/**
 * Message defining a field of a BigQuery table.
 */
export declare class GooglePrivacyDlpV2BigQueryField extends SpeakeasyBase {
    /**
     * General identifier of a data field in a storage service.
     */
    field?: GooglePrivacyDlpV2FieldId;
    /**
     * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
     */
    table?: GooglePrivacyDlpV2BigQueryTable;
}
