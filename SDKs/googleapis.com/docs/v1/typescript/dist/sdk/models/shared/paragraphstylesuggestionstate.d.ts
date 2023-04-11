import { SpeakeasyBase } from "../../../internal/utils";
import { ShadingSuggestionState } from "./shadingsuggestionstate";
/**
 * A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class ParagraphStyleSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to alignment.
     */
    alignmentSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to avoid_widow_and_orphan.
     */
    avoidWidowAndOrphanSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to border_between.
     */
    borderBetweenSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to border_bottom.
     */
    borderBottomSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to border_left.
     */
    borderLeftSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to border_right.
     */
    borderRightSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to border_top.
     */
    borderTopSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to direction.
     */
    directionSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to heading_id.
     */
    headingIdSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to indent_end.
     */
    indentEndSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to indent_first_line.
     */
    indentFirstLineSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to indent_start.
     */
    indentStartSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to keep_lines_together.
     */
    keepLinesTogetherSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to keep_with_next.
     */
    keepWithNextSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to line_spacing.
     */
    lineSpacingSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to named_style_type.
     */
    namedStyleTypeSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to page_break_before.
     */
    pageBreakBeforeSuggested?: boolean;
    /**
     * A mask that indicates which of the fields on the base Shading have been changed in this suggested change. For any field set to true, there's a new suggested value.
     */
    shadingSuggestionState?: ShadingSuggestionState;
    /**
     * Indicates if there was a suggested change to space_above.
     */
    spaceAboveSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to space_below.
     */
    spaceBelowSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to spacing_mode.
     */
    spacingModeSuggested?: boolean;
}
