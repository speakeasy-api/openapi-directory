import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response when clearing a range of values in a spreadsheet.
 */
export declare class ClearValuesResponse extends SpeakeasyBase {
    /**
     * The range (in A1 notation) that was cleared. (If the request was for an unbounded range or a ranger larger than the bounds of the sheet, this will be the actual range that was cleared, bounded to the sheet's limits.)
     */
    clearedRange?: string;
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
}
