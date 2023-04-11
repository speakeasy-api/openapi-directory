import { SpeakeasyBase } from "../../../internal/utils";
import { Ownership } from "./ownership";
/**
 * Pages of ownership results
 */
export declare class OwnershipPages extends SpeakeasyBase {
    /**
     * The total number of results
     */
    count: number;
    /**
     * An array of ownership records for the current page
     */
    list: Ownership[];
    /**
     * The current page number for this result set
     */
    pageNumber?: number;
    /**
     * The total number of pages available for this result set
     */
    pages?: number;
}
