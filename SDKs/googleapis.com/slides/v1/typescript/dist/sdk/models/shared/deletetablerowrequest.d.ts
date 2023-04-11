import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Deletes a row from a table.
 */
export declare class DeleteTableRowRequest extends SpeakeasyBase {
    /**
     * A location of a single table cell within a table.
     */
    cellLocation?: TableCellLocation;
    /**
     * The table to delete rows from.
     */
    tableObjectId?: string;
}
