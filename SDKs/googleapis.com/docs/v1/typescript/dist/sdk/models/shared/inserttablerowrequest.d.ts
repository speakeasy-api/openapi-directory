import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Inserts an empty row into a table.
 */
export declare class InsertTableRowRequest extends SpeakeasyBase {
    /**
     * Whether to insert new row below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell.
     */
    insertBelow?: boolean;
    /**
     * Location of a single cell within a table.
     */
    tableCellLocation?: TableCellLocation;
}
