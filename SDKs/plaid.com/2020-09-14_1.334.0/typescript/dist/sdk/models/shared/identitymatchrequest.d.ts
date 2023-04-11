import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityMatchRequestOptions } from "./identitymatchrequestoptions";
/**
 * IdentityMatchRequest defines the request schema for `/identity/match`
 */
export declare class IdentityMatchRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to filter /identity/match results
     */
    options?: IdentityMatchRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The user's legal name, phone number, email address and address used to perform fuzzy match.
     */
    user?: Record<string, any>;
}
