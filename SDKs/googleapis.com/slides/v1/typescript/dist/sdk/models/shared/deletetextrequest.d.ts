import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Deletes text from a shape or a table cell.
 */
export declare class DeleteTextRequest extends SpeakeasyBase {
    /**
     * A location of a single table cell within a table.
     */
    cellLocation?: TableCellLocation;
    /**
     * The object ID of the shape or table from which the text will be deleted.
     */
    objectId?: string;
    /**
     * Specifies a contiguous range of an indexed collection, such as characters in text.
     */
    textRange?: Range;
}
