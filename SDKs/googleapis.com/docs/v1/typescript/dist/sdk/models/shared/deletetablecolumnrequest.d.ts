import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Deletes a column from a table.
 */
export declare class DeleteTableColumnRequest extends SpeakeasyBase {
    /**
     * Location of a single cell within a table.
     */
    tableCellLocation?: TableCellLocation;
}
