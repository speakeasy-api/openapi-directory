import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeywordList } from "./negativekeywordlist";
/**
 * Response message for NegativeKeywordListService.ListNegativeKeywordLists.
 */
export declare class ListNegativeKeywordListsResponse extends SpeakeasyBase {
    /**
     * The list of negative keyword lists. This list will be absent if empty.
     */
    negativeKeywordLists?: NegativeKeywordList[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListNegativeKeywordLists` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
