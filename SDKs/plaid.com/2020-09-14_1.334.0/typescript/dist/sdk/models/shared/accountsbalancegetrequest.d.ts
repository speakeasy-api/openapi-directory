import { SpeakeasyBase } from "../../../internal/utils";
import { AccountsBalanceGetRequestOptions } from "./accountsbalancegetrequestoptions";
/**
 * AccountsBalanceGetRequest defines the request schema for `/accounts/balance/get`
 */
export declare class AccountsBalanceGetRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to filter `/accounts/balance/get` results.
     */
    options?: AccountsBalanceGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
