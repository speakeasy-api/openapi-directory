import { SpeakeasyBase } from "../../../internal/utils";
import { ValueRange } from "./valuerange";
/**
 * The response when retrieving more than one range of values in a spreadsheet.
 */
export declare class BatchGetValuesResponse extends SpeakeasyBase {
    /**
     * The ID of the spreadsheet the data was retrieved from.
     */
    spreadsheetId?: string;
    /**
     * The requested values. The order of the ValueRanges is the same as the order of the requested ranges.
     */
    valueRanges?: ValueRange[];
}
