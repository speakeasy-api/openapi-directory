import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";
/**
 * Describes the bullet of a paragraph.
 */
export declare class Bullet extends SpeakeasyBase {
    /**
     * Represents the styling that can be applied to a TextRun. If this text is contained in a shape with a parent placeholder, then these text styles may be inherited from the parent. Which text styles are inherited depend on the nesting level of lists: * A text run in a paragraph that is not in a list will inherit its text style from the the newline character in the paragraph at the 0 nesting level of the list inside the parent placeholder. * A text run in a paragraph that is in a list will inherit its text style from the newline character in the paragraph at its corresponding nesting level of the list inside the parent placeholder. Inherited text styles are represented as unset fields in this message. If text is contained in a shape without a parent placeholder, unsetting these fields will revert the style to a value matching the defaults in the Slides editor.
     */
    bulletStyle?: TextStyle;
    /**
     * The rendered bullet glyph for this paragraph.
     */
    glyph?: string;
    /**
     * The ID of the list this paragraph belongs to.
     */
    listId?: string;
    /**
     * The nesting level of this paragraph in the list.
     */
    nestingLevel?: number;
}
