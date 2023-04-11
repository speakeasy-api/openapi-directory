import { SpeakeasyBase } from "../../../internal/utils";
/**
 * TransactionsEnhanceGetRequest defines the request schema for `/transactions/enhance`.
 */
export declare class TransactionsEnhanceGetRequest extends SpeakeasyBase {
    /**
     * The type of account for the requested transactions (`depository` or `credit`).
     */
    accountType: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * An array of raw transactions to be enhanced.
     */
    transactions: Record<string, any>[];
}
