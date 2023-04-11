import { SpeakeasyBase } from "../../../internal/utils";
import { AccountsGetRequestOptions } from "./accountsgetrequestoptions";
/**
 * AccountsGetRequest defines the request schema for `/accounts/get`
 */
export declare class AccountsGetRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to filter `/accounts/get` results.
     */
    options?: AccountsGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
