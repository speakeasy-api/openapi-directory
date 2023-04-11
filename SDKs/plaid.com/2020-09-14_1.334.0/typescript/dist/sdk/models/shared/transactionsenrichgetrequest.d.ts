import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionsEnrichRequestOptions } from "./transactionsenrichrequestoptions";
/**
 * TransactionsEnrichGetRequest defines the request schema for `/transactions/enrich`.
 */
export declare class TransactionsEnrichGetRequest extends SpeakeasyBase {
    /**
     * The account type for the requested transactions (either `depository` or `credit`).
     */
    accountType: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to be used with the request.
     */
    options?: TransactionsEnrichRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * An array of transaction objects to be enriched by Plaid. Maximum of 100 transactions per request.
     */
    transactions: Record<string, any>[];
}
