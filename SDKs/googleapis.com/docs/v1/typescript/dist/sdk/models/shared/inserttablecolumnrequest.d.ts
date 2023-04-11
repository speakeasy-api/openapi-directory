import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Inserts an empty column into a table.
 */
export declare class InsertTableColumnRequest extends SpeakeasyBase {
    /**
     * Whether to insert new column to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left.
     */
    insertRight?: boolean;
    /**
     * Location of a single cell within a table.
     */
    tableCellLocation?: TableCellLocation;
}
