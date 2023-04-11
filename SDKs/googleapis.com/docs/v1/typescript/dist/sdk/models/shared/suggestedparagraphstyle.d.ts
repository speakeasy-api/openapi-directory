import { SpeakeasyBase } from "../../../internal/utils";
import { ParagraphStyle } from "./paragraphstyle";
import { ParagraphStyleSuggestionState } from "./paragraphstylesuggestionstate";
/**
 * A suggested change to a ParagraphStyle.
 */
export declare class SuggestedParagraphStyle extends SpeakeasyBase {
    /**
     * Styles that apply to a whole paragraph. Inherited paragraph styles are represented as unset fields in this message. A paragraph style's parent depends on where the paragraph style is defined: * The ParagraphStyle on a Paragraph inherits from the paragraph's corresponding named style type. * The ParagraphStyle on a named style inherits from the normal text named style. * The ParagraphStyle of the normal text named style inherits from the default paragraph style in the Docs editor. * The ParagraphStyle on a Paragraph element that's contained in a table may inherit its paragraph style from the table style. If the paragraph style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
     */
    paragraphStyle?: ParagraphStyle;
    /**
     * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    paragraphStyleSuggestionState?: ParagraphStyleSuggestionState;
}
