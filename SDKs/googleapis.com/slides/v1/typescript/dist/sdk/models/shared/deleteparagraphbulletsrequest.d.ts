import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { TableCellLocation } from "./tablecelllocation";
/**
 * Deletes bullets from all of the paragraphs that overlap with the given text index range. The nesting level of each paragraph will be visually preserved by adding indent to the start of the corresponding paragraph.
 */
export declare class DeleteParagraphBulletsRequest extends SpeakeasyBase {
    /**
     * A location of a single table cell within a table.
     */
    cellLocation?: TableCellLocation;
    /**
     * The object ID of the shape or table containing the text to delete bullets from.
     */
    objectId?: string;
    /**
     * Specifies a contiguous range of an indexed collection, such as characters in text.
     */
    textRange?: Range;
}
