import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
import { ValueRange } from "./valuerange";
/**
 * A value range that was matched by one or more data filers.
 */
export declare class MatchedValueRange extends SpeakeasyBase {
    /**
     * The DataFilters from the request that matched the range of values.
     */
    dataFilters?: DataFilter[];
    /**
     * Data within a range of the spreadsheet.
     */
    valueRange?: ValueRange;
}
