import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
import { GooglePrivacyDlpV2FieldId } from "./googleprivacydlpv2fieldid";
export declare enum GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum {
    SampleMethodUnspecified = "SAMPLE_METHOD_UNSPECIFIED",
    Top = "TOP",
    RandomStart = "RANDOM_START"
}
/**
 * Options defining BigQuery table and row identifiers.
 */
export declare class GooglePrivacyDlpV2BigQueryOptions extends SpeakeasyBase {
    /**
     * References to fields excluded from scanning. This allows you to skip inspection of entire columns which you know have no findings.
     */
    excludedFields?: GooglePrivacyDlpV2FieldId[];
    /**
     * Table fields that may uniquely identify a row within the table. When `actions.saveFindings.outputConfig.table` is specified, the values of columns specified here are available in the output table under `location.content_locations.record_location.record_key.id_values`. Nested fields such as `person.birthdate.year` are allowed.
     */
    identifyingFields?: GooglePrivacyDlpV2FieldId[];
    /**
     * Limit scanning only to these fields.
     */
    includedFields?: GooglePrivacyDlpV2FieldId[];
    /**
     * Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted. If not set, or if set to 0, all rows will be scanned. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
     */
    rowsLimit?: string;
    /**
     * Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of rows_limit and rows_limit_percent can be specified. Cannot be used in conjunction with TimespanConfig.
     */
    rowsLimitPercent?: number;
    sampleMethod?: GooglePrivacyDlpV2BigQueryOptionsSampleMethodEnum;
    /**
     * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
     */
    tableReference?: GooglePrivacyDlpV2BigQueryTable;
}
