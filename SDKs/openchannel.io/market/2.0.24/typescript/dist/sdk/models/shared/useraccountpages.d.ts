import { SpeakeasyBase } from "../../../internal/utils";
import { UserAccount } from "./useraccount";
/**
 * Pages of userAccount results
 */
export declare class UserAccountPages extends SpeakeasyBase {
    /**
     * The total number of results
     */
    count: number;
    /**
     * An array of userAccounts for the current page
     */
    list: UserAccount[];
    /**
     * The current page number for this result set
     */
    pageNumber?: number;
    /**
     * The total number of pages available for this result set
     */
    pages?: number;
}
