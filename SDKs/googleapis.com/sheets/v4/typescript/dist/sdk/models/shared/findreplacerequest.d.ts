import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
/**
 * Finds and replaces data in cells over a range, sheet, or all sheets.
 */
export declare class FindReplaceRequest extends SpeakeasyBase {
    /**
     * True to find/replace over all sheets.
     */
    allSheets?: boolean;
    /**
     * The value to search.
     */
    find?: string;
    /**
     * True if the search should include cells with formulas. False to skip cells with formulas.
     */
    includeFormulas?: boolean;
    /**
     * True if the search is case sensitive.
     */
    matchCase?: boolean;
    /**
     * True if the find value should match the entire cell.
     */
    matchEntireCell?: boolean;
    /**
     * A range on a sheet. All indexes are zero-based. Indexes are half open, i.e. the start index is inclusive and the end index is exclusive -- [start_index, end_index). Missing indexes indicate the range is unbounded on that side. For example, if `"Sheet1"` is sheet ID 123456, then: `Sheet1!A1:A1 == sheet_id: 123456, start_row_index: 0, end_row_index: 1, start_column_index: 0, end_column_index: 1` `Sheet1!A3:B4 == sheet_id: 123456, start_row_index: 2, end_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1!A:B == sheet_id: 123456, start_column_index: 0, end_column_index: 2` `Sheet1!A5:B == sheet_id: 123456, start_row_index: 4, start_column_index: 0, end_column_index: 2` `Sheet1 == sheet_id: 123456` The start index must always be less than or equal to the end index. If the start index equals the end index, then the range is empty. Empty ranges are typically not meaningful and are usually rendered in the UI as `#REF!`.
     */
    range?: GridRange;
    /**
     * The value to use as the replacement.
     */
    replacement?: string;
    /**
     * True if the find value is a regex. The regular expression and replacement should follow Java regex rules at https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html. The replacement string is allowed to refer to capturing groups. For example, if one cell has the contents `"Google Sheets"` and another has `"Google Docs"`, then searching for `"o.* (.*)"` with a replacement of `"$1 Rocks"` would change the contents of the cells to `"GSheets Rocks"` and `"GDocs Rocks"` respectively.
     */
    searchByRegex?: boolean;
    /**
     * The sheet to find/replace over.
     */
    sheetId?: number;
}
