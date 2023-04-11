import { SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";
import { TableStyle } from "./tablestyle";
/**
 * A StructuralElement representing a table.
 */
export declare class Table extends SpeakeasyBase {
    /**
     * Number of columns in the table. It's possible for a table to be non-rectangular, so some rows may have a different number of cells.
     */
    columns?: number;
    /**
     * Number of rows in the table.
     */
    rows?: number;
    /**
     * The suggested deletion IDs. If empty, then there are no suggested deletions of this content.
     */
    suggestedDeletionIds?: string[];
    /**
     * The suggested insertion IDs. A Table may have multiple insertion IDs if it's a nested suggested change. If empty, then this is not a suggested insertion.
     */
    suggestedInsertionIds?: string[];
    /**
     * The contents and style of each row.
     */
    tableRows?: TableRow[];
    /**
     * Styles that apply to a table.
     */
    tableStyle?: TableStyle;
}
