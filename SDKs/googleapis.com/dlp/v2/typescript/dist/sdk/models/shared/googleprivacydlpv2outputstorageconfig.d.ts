import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2BigQueryTable } from "./googleprivacydlpv2bigquerytable";
/**
 * Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage.
 */
export declare enum GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum {
    OutputSchemaUnspecified = "OUTPUT_SCHEMA_UNSPECIFIED",
    BasicColumns = "BASIC_COLUMNS",
    GcsColumns = "GCS_COLUMNS",
    DatastoreColumns = "DATASTORE_COLUMNS",
    BigQueryColumns = "BIG_QUERY_COLUMNS",
    AllColumns = "ALL_COLUMNS"
}
/**
 * Cloud repository for storing output.
 */
export declare class GooglePrivacyDlpV2OutputStorageConfig extends SpeakeasyBase {
    /**
     * Schema used for writing the findings for Inspect jobs. This field is only used for Inspect and must be unspecified for Risk jobs. Columns are derived from the `Finding` object. If appending to an existing table, any columns from the predefined schema that are missing will be added. No columns in the existing table will be deleted. If unspecified, then all available columns will be used for a new table or an (existing) table with no schema, and no changes will be made to an existing table that has a schema. Only for use with external storage.
     */
    outputSchema?: GooglePrivacyDlpV2OutputStorageConfigOutputSchemaEnum;
    /**
     * Message defining the location of a BigQuery table. A table is uniquely identified by its project_id, dataset_id, and table_name. Within a query a table is often referenced with a string in the format of: `:.` or `..`.
     */
    table?: GooglePrivacyDlpV2BigQueryTable;
}
