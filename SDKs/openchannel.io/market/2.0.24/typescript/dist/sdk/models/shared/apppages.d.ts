import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 * Pages of app results
 */
export declare class AppPages extends SpeakeasyBase {
    /**
     * The total number of results
     */
    count: number;
    /**
     * An array of apps for the current page
     */
    list: App[];
    /**
     * The current page number for this result set
     */
    pageNumber?: number;
    /**
     * The total number of pages available for this result set
     */
    pages?: number;
}
