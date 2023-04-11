import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Inserts columns into a table. Other columns in the table will be resized to fit the new column.
 */
export declare class InsertTableColumnsRequest extends SpeakeasyBase {
    /**
     * A location of a single table cell within a table.
     */
    cellLocation?: TableCellLocation;
    /**
     * Whether to insert new columns to the right of the reference cell location. - `True`: insert to the right. - `False`: insert to the left.
     */
    insertRight?: boolean;
    /**
     * The number of columns to be inserted. Maximum 20 per request.
     */
    number?: number;
    /**
     * The table to insert columns into.
     */
    tableObjectId?: string;
}
