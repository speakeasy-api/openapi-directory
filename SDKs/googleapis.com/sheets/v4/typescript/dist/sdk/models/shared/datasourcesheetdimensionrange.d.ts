import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
/**
 * A range along a single dimension on a DATA_SOURCE sheet.
 */
export declare class DataSourceSheetDimensionRange extends SpeakeasyBase {
    /**
     * The columns on the data source sheet.
     */
    columnReferences?: DataSourceColumnReference[];
    /**
     * The ID of the data source sheet the range is on.
     */
    sheetId?: number;
}
