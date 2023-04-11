import { SpeakeasyBase } from "../../../internal/utils";
import { Transaction } from "./transaction";
/**
 * Pages of transaction results
 */
export declare class TransactionPages extends SpeakeasyBase {
    /**
     * The total number of results
     */
    count: number;
    /**
     * An array of paymnets for the current page
     */
    list: Transaction[];
    /**
     * The current page number for this result set
     */
    pageNumber?: number;
    /**
     * The total number of pages available for this result set
     */
    pages?: number;
}
