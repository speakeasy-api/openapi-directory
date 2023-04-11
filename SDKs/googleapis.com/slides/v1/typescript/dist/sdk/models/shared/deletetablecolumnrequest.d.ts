import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Deletes a column from a table.
 */
export declare class DeleteTableColumnRequest extends SpeakeasyBase {
    /**
     * A location of a single table cell within a table.
     */
    cellLocation?: TableCellLocation;
    /**
     * The table to delete columns from.
     */
    tableObjectId?: string;
}
