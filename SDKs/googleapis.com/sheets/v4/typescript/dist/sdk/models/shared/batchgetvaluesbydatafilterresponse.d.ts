import { SpeakeasyBase } from "../../../internal/utils";
import { MatchedValueRange } from "./matchedvaluerange";
/**
 * The response when retrieving more than one range of values in a spreadsheet selected by DataFilters.
 */
export declare class BatchGetValuesByDataFilterResponse extends SpeakeasyBase {
    /**
     * The ID of the spreadsheet the data was retrieved from.
     */
    spreadsheetId?: string;
    /**
     * The requested values with the list of data filters that matched them.
     */
    valueRanges?: MatchedValueRange[];
}
