import { SpeakeasyBase } from "../../../internal/utils";
import { NegativeKeyword } from "./negativekeyword";
/**
 * Response message for NegativeKeywordService.ListNegativeKeywords.
 */
export declare class ListNegativeKeywordsResponse extends SpeakeasyBase {
    /**
     * The list of negative keywords. This list will be absent if empty.
     */
    negativeKeywords?: NegativeKeyword[];
    /**
     * A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to `ListNegativeKeywords` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
