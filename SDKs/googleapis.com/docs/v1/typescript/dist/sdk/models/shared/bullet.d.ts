import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";
/**
 * Describes the bullet of a paragraph.
 */
export declare class Bullet extends SpeakeasyBase {
    /**
     * The ID of the list this paragraph belongs to.
     */
    listId?: string;
    /**
     * The nesting level of this paragraph in the list.
     */
    nestingLevel?: number;
    /**
     * Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
     */
    textStyle?: TextStyle;
}
