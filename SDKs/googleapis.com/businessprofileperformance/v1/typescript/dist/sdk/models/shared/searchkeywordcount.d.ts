import { SpeakeasyBase } from "../../../internal/utils";
import { InsightsValue } from "./insightsvalue";
/**
 * Represents a single search keyword and its value.
 */
export declare class SearchKeywordCount extends SpeakeasyBase {
    /**
     * Represents an insights value.
     */
    insightsValue?: InsightsValue;
    /**
     * The lower-cased string that the user entered.
     */
    searchKeyword?: string;
}
