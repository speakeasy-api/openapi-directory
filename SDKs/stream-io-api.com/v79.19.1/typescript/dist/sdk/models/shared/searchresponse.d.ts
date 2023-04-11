import { SpeakeasyBase } from "../../../internal/utils";
import { SearchResult } from "./searchresult";
import { SearchWarning } from "./searchwarning";
/**
 * Successful response
 */
export declare class SearchResponse extends SpeakeasyBase {
    duration: string;
    /**
     * Value to pass to the next search query in order to paginate
     */
    next?: string;
    /**
     * Value that points to the previous page. Pass as the next value in a search query to paginate backwards
     */
    previous?: string;
    /**
     * Search results
     */
    results: SearchResult[];
    resultsWarning?: SearchWarning;
}
