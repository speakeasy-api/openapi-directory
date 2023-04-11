import { SpeakeasyBase } from "../../../internal/utils";
import { ImageSearchResults } from "./imagesearchresults";
/**
 * List of search results for each given query
 */
export declare class BulkImageSearchResults extends SpeakeasyBase {
    /**
     * Unique identifier for the search request
     */
    bulkSearchId?: string;
    /**
     * List of image search results
     */
    results?: ImageSearchResults[];
}
