import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTextStyle } from "./suggestedtextstyle";
import { TextStyle } from "./textstyle";
/**
 * A ParagraphElement representing a footnote reference. A footnote reference is the inline content rendered with a number and is used to identify the footnote.
 */
export declare class FootnoteReference extends SpeakeasyBase {
    /**
     * The ID of the footnote that contains the content of this footnote reference.
     */
    footnoteId?: string;
    /**
     * The rendered number of this footnote.
     */
    footnoteNumber?: string;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested insertion IDs. A FootnoteReference may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[];
    /**
     * The suggested text style changes to this FootnoteReference, keyed by suggestion ID.
     */
    suggestedTextStyleChanges?: Record<string, SuggestedTextStyle>;
    /**
     * Represents the styling that can be applied to text. Inherited text styles are represented as unset fields in this message. A text style's parent depends on where the text style is defined: * The TextStyle of text in a Paragraph inherits from the paragraph's corresponding named style type. * The TextStyle on a named style inherits from the normal text named style. * The TextStyle of the normal text named style inherits from the default text style in the Docs editor. * The TextStyle on a Paragraph element that's contained in a table may inherit its text style from the table style. If the text style does not inherit from a parent, unsetting fields will revert the style to a value matching the defaults in the Docs editor.
     */
    textStyle?: TextStyle;
}
