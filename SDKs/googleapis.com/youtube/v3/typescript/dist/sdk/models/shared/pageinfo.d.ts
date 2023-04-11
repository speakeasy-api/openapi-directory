import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Paging details for lists of resources, including total number of items available and number of resources returned in a single page.
 */
export declare class PageInfo extends SpeakeasyBase {
    /**
     * The number of results included in the API response.
     */
    resultsPerPage?: number;
    /**
     * The total number of results in the result set.
     */
    totalResults?: number;
}
