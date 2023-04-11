import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Inserts rows into a table.
 */
export declare class InsertTableRowsRequest extends SpeakeasyBase {
    /**
     * A location of a single table cell within a table.
     */
    cellLocation?: TableCellLocation;
    /**
     * Whether to insert new rows below the reference cell location. - `True`: insert below the cell. - `False`: insert above the cell.
     */
    insertBelow?: boolean;
    /**
     * The number of rows to be inserted. Maximum 20 per request.
     */
    number?: number;
    /**
     * The table to insert rows into.
     */
    tableObjectId?: string;
}
