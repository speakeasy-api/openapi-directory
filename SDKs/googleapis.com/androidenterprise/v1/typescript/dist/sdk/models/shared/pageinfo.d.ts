import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the current page. List operations that supports paging return only one "page" of results. This protocol buffer message describes the page that has been returned.
 */
export declare class PageInfo extends SpeakeasyBase {
    /**
     * Maximum number of results returned in one page. ! The number of results included in the API response.
     */
    resultPerPage?: number;
    /**
     * Index of the first result returned in the current page.
     */
    startIndex?: number;
    /**
     * Total number of results available on the backend ! The total number of results in the result set.
     */
    totalResults?: number;
}
