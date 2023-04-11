import { SpeakeasyBase } from "../../../internal/utils";
import { StructuralElement } from "./structuralelement";
import { SuggestedTableCellStyle } from "./suggestedtablecellstyle";
import { TableCellStyle } from "./tablecellstyle";
/**
 * The contents and style of a cell in a Table.
 */
export declare class TableCell extends SpeakeasyBase {
    /**
     * The content of the cell.
     */
    content?: StructuralElement[];
    /**
     * The zero-based end index of this cell, exclusive, in UTF-16 code units.
     */
    endIndex?: number;
    /**
     * The zero-based start index of this cell, in UTF-16 code units.
     */
    startIndex?: number;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested insertion IDs. A TableCell may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[];
    /**
     * The suggested changes to the table cell style, keyed by suggestion ID.
     */
    suggestedTableCellStyleChanges?: Record<string, SuggestedTableCellStyle>;
    /**
     * The style of a TableCell. Inherited table cell styles are represented as unset fields in this message. A table cell style can inherit from the table's style.
     */
    tableCellStyle?: TableCellStyle;
}
