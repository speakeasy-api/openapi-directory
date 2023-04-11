import { SpeakeasyBase } from "../../../internal/utils";
/**
 * LinkTokenGetRequest defines the request schema for `/link/token/get`
 */
export declare class LinkTokenGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * A `link_token` from a previous invocation of `/link/token/create`
     */
    linkToken: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
