import { SpeakeasyBase } from "../../../internal/utils";
/**
 * OK
 */
export declare class SearchResponse extends SpeakeasyBase {
    /**
     * The number of search results in this page.
     */
    count?: number;
    /**
     * Pass this value to the **offset** parameter to do pagination of search results.
     */
    nextOffset?: number;
    /**
     * A list of search results.
     */
    results?: any[];
    /**
     * The time it took to fetch these search results. In seconds.
     */
    took?: number;
    /**
     * The total number of search results.
     */
    total?: number;
}
