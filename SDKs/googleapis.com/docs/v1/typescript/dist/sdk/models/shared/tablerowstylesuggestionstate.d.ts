import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
 */
export declare class TableRowStyleSuggestionState extends SpeakeasyBase {
    /**
     * Indicates if there was a suggested change to min_row_height.
     */
    minRowHeightSuggested?: boolean;
}
