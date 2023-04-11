import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WalletTransactionExecuteRequest defines the request schema for `/wallet/transaction/execute`
 */
export declare class WalletTransactionExecuteRequest extends SpeakeasyBase {
    /**
     * The amount and currency of a transaction
     */
    amount: Record<string, any>;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An object representing the e-wallet transaction's counterparty
     */
    counterparty: Record<string, any>;
    /**
     * A random key provided by the client, per unique wallet transaction. Maximum of 128 characters.
     *
     * @remarks
     *
     * The API supports idempotency for safely retrying requests without accidentally performing the same operation twice. If a request to execute a wallet transaction fails due to a network connection error, then after a minimum delay of one minute, you can retry the request with the same idempotency key to guarantee that only a single wallet transaction is created. If the request was successfully processed, it will prevent any transaction that uses the same idempotency key, and was received within 24 hours of the first request, from being processed.
     */
    idempotencyKey: string;
    /**
     * A reference for the transaction. This must be an alphanumeric string with 6 to 18 characters and must not contain any special characters or spaces.
     *
     * @remarks
     * Ensure that the `reference` field is unique for each transaction.
     */
    reference: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The ID of the e-wallet to debit from
     */
    walletId: string;
}
