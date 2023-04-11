import { SpeakeasyBase } from "../../../internal/utils";
import { Review } from "./review";
/**
 * Pages of review results
 */
export declare class ReviewPages extends SpeakeasyBase {
    /**
     * The total number of results
     */
    count: number;
    /**
     * An array of reviews for the current page
     */
    list: Review[];
    /**
     * The current page number for this result set
     */
    pageNumber?: number;
    /**
     * The total number of pages available for this result set
     */
    pages?: number;
}
