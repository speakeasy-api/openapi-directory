import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutTransactionsIdRequestBody extends SpeakeasyBase {
    /**
     * A new amount for the transaction.
     */
    amount?: number;
    /**
     * The unique identifier of a new category for the transaction.
     */
    categoryId?: number;
    /**
     * A new cheque number for the transaction.
     */
    chequeNumber?: string;
    /**
     * A new date for the transaction.
     */
    date?: string;
    /**
     * Whether the transaction is a transfer or not.
     */
    isTransfer?: boolean;
    /**
     * A new comma-separated set of labels for the transaction.
     */
    labels?: string;
    /**
     * A new memo for the transaction.
     */
    memo?: string;
    /**
     * Whether the transaction needs to be reviewed or not.
     */
    needsReview?: boolean;
    /**
     * A new note for the transaction.
     */
    note?: string;
    /**
     * A new payee for the transaction.
     */
    payee?: string;
}
export declare class PutTransactionsIdRequest extends SpeakeasyBase {
    requestBody?: PutTransactionsIdRequestBody;
    /**
     * The unique identifier of the transaction.
     */
    id: number;
}
export declare class PutTransactionsIdResponse extends SpeakeasyBase {
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
