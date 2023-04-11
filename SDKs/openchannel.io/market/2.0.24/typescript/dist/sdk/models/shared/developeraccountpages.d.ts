import { SpeakeasyBase } from "../../../internal/utils";
import { DeveloperAccount } from "./developeraccount";
/**
 * Pages of developerAccount results
 */
export declare class DeveloperAccountPages extends SpeakeasyBase {
    /**
     * The total number of results
     */
    count: number;
    /**
     * An array of developerAccounts for the current page
     */
    list: DeveloperAccount[];
    /**
     * The current page number for this result set
     */
    pageNumber: number;
    /**
     * The total number of pages available for this result set
     */
    pages: number;
}
