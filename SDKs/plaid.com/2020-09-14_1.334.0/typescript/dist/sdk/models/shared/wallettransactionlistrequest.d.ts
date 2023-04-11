import { SpeakeasyBase } from "../../../internal/utils";
import { WalletTransactionListRequestOptions } from "./wallettransactionlistrequestoptions";
/**
 * WalletTransactionListRequest defines the request schema for `/wallet/transaction/list`
 */
export declare class WalletTransactionListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The number of transactions to fetch
     */
    count?: number;
    /**
     * A base64 value representing the latest transaction that has already been requested. Set this to `next_cursor` received from the previous `/wallet/transaction/list` request. If provided, the response will only contain transactions created before that transaction. If omitted, the response will contain transactions starting from the most recent, and in descending order by the `created_at` time.
     */
    cursor?: string;
    /**
     * Additional wallet transaction options
     */
    options?: WalletTransactionListRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The ID of the e-wallet to fetch transactions from
     */
    walletId: string;
}
