import { SpeakeasyBase } from "../../../internal/utils";
import { SearchKeywordCount } from "./searchkeywordcount";
/**
 * Represents the response for ListSearchKeywordImpressionsMonthly.
 */
export declare class ListSearchKeywordImpressionsMonthlyResponse extends SpeakeasyBase {
    /**
     * A token indicating the last paginated result returned. This can be used by succeeding requests to get the next "page" of keywords. It will only be present when there are more results to be returned.
     */
    nextPageToken?: string;
    /**
     * Search terms which have been used to find a business.
     */
    searchKeywordsCounts?: SearchKeywordCount[];
}
