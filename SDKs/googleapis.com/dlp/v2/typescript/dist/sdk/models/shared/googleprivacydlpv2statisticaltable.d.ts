import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
import { GooglePrivacyDlpV2QuasiIdentifierField } from "./googleprivacydlpv2quasiidentifierfield";
/**
 * An auxiliary table containing statistical information on the relative frequency of different quasi-identifiers values. It has one or several quasi-identifiers columns, and one column that indicates the relative frequency of each quasi-identifier tuple. If a tuple is present in the data but not in the auxiliary table, the corresponding relative frequency is assumed to be zero (and thus, the tuple is highly reidentifiable).
 */
export declare class GooglePrivacyDlpV2StatisticalTable extends SpeakeasyBase {
    /**
     * Required. Quasi-identifier columns.
     */
    quasiIds?: GooglePrivacyDlpV2QuasiIdentifierField[];
    /**
     * General identifier of a data field in a storage service.
     */
    relativeFrequency?: GooglePrivacyDlpV2FieldId;
    /**
     * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
     */
    table?: GooglePrivacyDlpV2BigQueryTable;
}
