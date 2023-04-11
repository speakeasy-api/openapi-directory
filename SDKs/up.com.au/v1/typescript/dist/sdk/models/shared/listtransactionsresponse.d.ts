import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionResource } from "./transactionresource";
export declare class ListTransactionsResponseLinks extends SpeakeasyBase {
    /**
     * The link to the next page in the results. If this value is `null`
     *
     * @remarks
     * there is no next page.
     *
     */
    next: string;
    /**
     * The link to the previous page in the results. If this value is `null`
     *
     * @remarks
     * there is no previous page.
     *
     */
    prev: string;
}
/**
 * Successful response to get all transactions. This returns a paginated
 *
 * @remarks
 * list of transactions, which can be scrolled by following the `prev` and
 * `next` links if present.
 *
 */
export declare class ListTransactionsResponse extends SpeakeasyBase {
    /**
     * The list of transactions returned in this response.
     *
     * @remarks
     *
     */
    data: TransactionResource[];
    links: ListTransactionsResponseLinks;
}
