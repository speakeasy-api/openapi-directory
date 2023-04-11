import { SpeakeasyBase } from "../../../internal/utils";
import { WalletISOCurrencyCodeEnum } from "./walletisocurrencycodeenum";
/**
 * WalletListRequest defines the request schema for `/wallet/list`
 */
export declare class WalletListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The number of e-wallets to fetch
     */
    count?: number;
    /**
     * A base64 value representing the latest e-wallet that has already been requested. Set this to `next_cursor` received from the previous `/wallet/list` request. If provided, the response will only contain e-wallets created before that e-wallet. If omitted, the response will contain e-wallets starting from the most recent, and in descending order.
     */
    cursor?: string;
    /**
     * An ISO-4217 currency code, used with e-wallets and transactions.
     */
    isoCurrencyCode?: WalletISOCurrencyCodeEnum;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
