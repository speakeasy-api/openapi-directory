import { SpeakeasyBase } from "../../../internal/utils";
import { Developer } from "./developer";
/**
 * Pages of developer results
 */
export declare class DeveloperPages extends SpeakeasyBase {
    /**
     * The total number of results
     */
    count: number;
    /**
     * An array of developers for the current page
     */
    list: Developer[];
    /**
     * The current page number for this result set
     */
    pageNumber: number;
    /**
     * The total number of pages available for this result set
     */
    pages: number;
}
