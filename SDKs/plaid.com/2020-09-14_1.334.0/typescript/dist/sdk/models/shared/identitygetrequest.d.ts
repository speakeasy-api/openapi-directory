import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityGetRequestOptions } from "./identitygetrequestoptions";
/**
 * IdentityGetRequest defines the request schema for `/identity/get`
 */
export declare class IdentityGetRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to filter `/identity/get` results.
     */
    options?: IdentityGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
