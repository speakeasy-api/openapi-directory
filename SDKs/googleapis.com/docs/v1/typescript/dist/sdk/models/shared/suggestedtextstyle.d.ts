import { SpeakeasyBase } from "../../../internal/utils";
import { TextStyle } from "./textstyle";
import { TextStyleSuggestionState } from "./textstylesuggestionstate";
/**
 * A suggested change to a TextStyle.
 */
export declare class SuggestedTextStyle extends SpeakeasyBase {
    /**
     * Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
     */
    textStyle?: TextStyle;
    /**
     * A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    textStyleSuggestionState?: TextStyleSuggestionState;
}
