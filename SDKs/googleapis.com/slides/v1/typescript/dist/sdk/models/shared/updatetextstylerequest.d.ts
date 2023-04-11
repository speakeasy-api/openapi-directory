import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { TableCellLocation } from "./tablecelllocation";
import { TextStyle } from "./textstyle";
/**
 * Update the styling of text in a Shape or Table.
 */
export declare class UpdateTextStyleRequest extends SpeakeasyBase {
    /**
     * A location of a single table cell within a table.
     */
    cellLocation?: TableCellLocation;
    /**
     * The fields that should be updated. At least one field must be specified. The root `style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string;
    /**
     * The object ID of the shape or table with the text to be styled.
     */
    objectId?: string;
    /**
     * Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
     */
    style?: TextStyle;
    /**
     * Specifies a contiguous range of an indexed collection, such as characters in text.
     */
    textRange?: Range;
}
