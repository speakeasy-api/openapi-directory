import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumn } from "./datasourcecolumn";
import { DataSourceSpec } from "./datasourcespec";
/**
 * Information about an external data source in the spreadsheet.
 */
export declare class DataSource extends SpeakeasyBase {
    /**
     * All calculated columns in the data source.
     */
    calculatedColumns?: DataSourceColumn[];
    /**
     * The spreadsheet-scoped unique ID that identifies the data source. Example: 1080547365.
     */
    dataSourceId?: string;
    /**
     * The ID of the Sheet connected with the data source. The field cannot be changed once set. When creating a data source, an associated DATA_SOURCE sheet is also created, if the field is not specified, the ID of the created sheet will be randomly generated.
     */
    sheetId?: number;
    /**
     * This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.
     */
    spec?: DataSourceSpec;
}
