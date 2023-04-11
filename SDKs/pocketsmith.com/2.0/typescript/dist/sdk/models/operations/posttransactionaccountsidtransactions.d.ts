import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTransactionAccountsIdTransactionsRequestBody extends SpeakeasyBase {
    /**
     * The amount of the transaction. A positive amount is a credit, and a negative amount is a debit.
     */
    amount: number;
    /**
     * The unique identifier of a category for the transaction.
     */
    categoryId?: number;
    /**
     * A cheque number for the transaction.
     */
    chequeNumber?: string;
    /**
     * The date when the transaction occurred.
     */
    date: string;
    /**
     * Whether the transaction should be indicated as a transfer.
     */
    isTransfer?: boolean;
    /**
     * A set of comma-separated labels for the transaction.
     */
    labels?: string;
    /**
     * A memo for the transaction.
     */
    memo?: string;
    /**
     * Whether the transaction needs to be reviewed or not.
     */
    needsReview?: boolean;
    /**
     * A note for the transaction.
     */
    note?: string;
    /**
     * The payee/merchant of the transaction.
     */
    payee: string;
}
export declare class PostTransactionAccountsIdTransactionsRequest extends SpeakeasyBase {
    requestBody?: PostTransactionAccountsIdTransactionsRequestBody;
    /**
     * The unique identifier of the transaction account.
     */
    id: number;
}
export declare class PostTransactionAccountsIdTransactionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    transaction?: shared.Transaction;
}
