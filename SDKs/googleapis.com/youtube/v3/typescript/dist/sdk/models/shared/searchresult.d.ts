import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceId } from "./resourceid";
import { SearchResultSnippet } from "./searchresultsnippet";
/**
 * A search result contains information about a YouTube video, channel, or playlist that matches the search parameters specified in an API request. While a search result points to a uniquely identifiable resource, like a video, it does not have its own persistent data.
 */
export declare class SearchResult extends SpeakeasyBase {
    /**
     * Etag of this resource.
     */
    etag?: string;
    /**
     * A resource id is a generic reference that points to another YouTube resource.
     */
    id?: ResourceId;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "youtube#searchResult".
     */
    kind?: string;
    /**
     * Basic details about a search result, including title, description and thumbnails of the item referenced by the search result.
     */
    snippet?: SearchResultSnippet;
}
