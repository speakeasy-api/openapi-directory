import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response when clearing a range of values selected with DataFilters in a spreadsheet.
 */
export declare class BatchClearValuesByDataFilterResponse extends SpeakeasyBase {
    /**
     * The ranges that were cleared, in [A1 notation](/sheets/api/guides/concepts#cell). If the requests are for an unbounded range or a ranger larger than the bounds of the sheet, this is the actual ranges that were cleared, bounded to the sheet's limits.
     */
    clearedRanges?: string[];
    /**
     * The spreadsheet the updates were applied to.
     */
    spreadsheetId?: string;
}
