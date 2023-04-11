import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Pages of user results
 */
export declare class UserPages extends SpeakeasyBase {
    /**
     * The total number of results
     */
    count: number;
    /**
     * An array of users for the current page
     */
    list: User[];
    /**
     * The current page number for this result set
     */
    pageNumber?: number;
    /**
     * The total number of pages available for this result set
     */
    pages?: number;
}
