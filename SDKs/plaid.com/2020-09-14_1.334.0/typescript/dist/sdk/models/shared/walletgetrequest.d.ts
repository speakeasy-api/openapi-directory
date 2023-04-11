import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WalletGetRequest defines the request schema for `/wallet/get`
 */
export declare class WalletGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The ID of the e-wallet
     */
    walletId: string;
}
