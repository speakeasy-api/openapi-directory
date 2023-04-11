import { SpeakeasyBase } from "../../../internal/utils";
import { SuggestedTableRowStyle } from "./suggestedtablerowstyle";
import { TableCell } from "./tablecell";
import { TableRowStyle } from "./tablerowstyle";
/**
 * The contents and style of a row in a Table.
 */
export declare class TableRow extends SpeakeasyBase {
    /**
     * The zero-based end index of this row, exclusive, in UTF-16 code units.
     */
    endIndex?: number;
    /**
     * The zero-based start index of this row, in UTF-16 code units.
     */
    startIndex?: number;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested insertion IDs. A TableRow may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[];
    /**
     * The suggested style changes to this row, keyed by suggestion ID.
     */
    suggestedTableRowStyleChanges?: Record<string, SuggestedTableRowStyle>;
    /**
     * The contents and style of each cell in this row. It's possible for a table to be non-rectangular, so some rows may have a different number of cells than other rows in the same table.
     */
    tableCells?: TableCell[];
    /**
     * Styles that apply to a table row.
     */
    tableRowStyle?: TableRowStyle;
}
