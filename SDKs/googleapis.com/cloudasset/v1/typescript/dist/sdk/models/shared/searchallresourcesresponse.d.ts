import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSearchResult } from "./resourcesearchresult";
/**
 * Search all resources response.
 */
export declare class SearchAllResourcesResponse extends SpeakeasyBase {
    /**
     * If there are more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
    /**
     * A list of Resources that match the search query. It contains the resource standard metadata information.
     */
    results?: ResourceSearchResult[];
}
