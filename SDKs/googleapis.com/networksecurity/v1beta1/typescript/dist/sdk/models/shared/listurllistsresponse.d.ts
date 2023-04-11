import { SpeakeasyBase } from "../../../internal/utils";
import { UrlList } from "./urllist";
/**
 * Response returned by the ListUrlLists method.
 */
export declare class ListUrlListsResponse extends SpeakeasyBase {
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachable?: string[];
    /**
     * List of UrlList resources.
     */
    urlLists?: UrlList[];
}
