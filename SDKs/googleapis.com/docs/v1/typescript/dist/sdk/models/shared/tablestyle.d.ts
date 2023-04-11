import { SpeakeasyBase } from "../../../internal/utils";
import { TableColumnProperties } from "./tablecolumnproperties";
/**
 * Styles that apply to a table.
 */
export declare class TableStyle extends SpeakeasyBase {
    /**
     * The properties of each column. Note that in Docs, tables contain rows and rows contain cells, similar to HTML. So the properties for a row can be found on the row's table_row_style.
     */
    tableColumnProperties?: TableColumnProperties[];
}
