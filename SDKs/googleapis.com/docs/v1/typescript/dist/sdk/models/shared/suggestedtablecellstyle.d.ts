import { SpeakeasyBase } from "../../../internal/utils";
import { TableCellStyle } from "./tablecellstyle";
import { TableCellStyleSuggestionState } from "./tablecellstylesuggestionstate";
/**
 * A suggested change to a TableCellStyle.
 */
export declare class SuggestedTableCellStyle extends SpeakeasyBase {
    /**
     * The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
     */
    tableCellStyle?: TableCellStyle;
    /**
     * A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
     */
    tableCellStyleSuggestionState?: TableCellStyleSuggestionState;
}
