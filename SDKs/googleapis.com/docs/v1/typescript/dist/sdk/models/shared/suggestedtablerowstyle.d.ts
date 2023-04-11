import { SpeakeasyBase } from "../../../internal/utils";
import { TableRowStyle } from "./tablerowstyle";
import { TableRowStyleSuggestionState } from "./tablerowstylesuggestionstate";
/**
 * A suggested change to a TableRowStyle.
 */
export declare class SuggestedTableRowStyle extends SpeakeasyBase {
    /**
     * Styles that apply to a table row.
     */
    tableRowStyle?: TableRowStyle;
    /**
     * A mask that indicates which of the fields on the base TableRowStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    tableRowStyleSuggestionState?: TableRowStyleSuggestionState;
}
