import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class TableCellStyleSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to background_color.
     */
    backgroundColorSuggested?: boolean;
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
     * Indicates if there was a suggested change to column_span.
     */
    columnSpanSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to content_alignment.
     */
    contentAlignmentSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to padding_bottom.
     */
    paddingBottomSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to padding_left.
     */
    paddingLeftSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to padding_right.
     */
    paddingRightSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to padding_top.
     */
    paddingTopSuggested?: boolean;
    /**
     * Indicates if there was a suggested change to row_span.
     */
    rowSpanSuggested?: boolean;
}
