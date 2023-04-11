import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { TextStyle } from "./textstyle";
/**
 * Update the styling of text.
 */
export declare class UpdateTextStyleRequest extends SpeakeasyBase {
    /**
     * The fields that should be updated. At least one field must be specified. The root `text_style` is implied and should not be specified. A single `"*"` can be used as short-hand for listing every field. For example, to update the text style to bold, set `fields` to `"bold"`. To reset a property to its default value, include its field name in the field mask but leave the field itself unset.
     */
    fields?: string;
    /**
     * Specifies a contiguous range of text.
     */
    range?: Range;
    /**
     * Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
     */
    textStyle?: TextStyle;
}
