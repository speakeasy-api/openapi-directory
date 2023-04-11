import { SpeakeasyBase } from "../../../internal/utils";
import { Scopes } from "./scopes";
import { ScopesContextEnum } from "./scopescontextenum";
/**
 * ItemApplicationScopesUpdateRequest defines the request schema for `/item/application/scopes/update`
 */
export declare class ItemApplicationScopesUpdateRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * This field will map to the application ID that is returned from /item/applications/list, or provided to the institution in an oauth redirect.
     */
    applicationId: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An indicator for when scopes are being updated. When scopes are updated via enrollment (i.e. OAuth), the partner must send `ENROLLMENT`. When scopes are updated in a post-enrollment view, the partner must send `PORTAL`.
     */
    context: ScopesContextEnum;
    /**
     * The scopes object
     */
    scopes: Scopes;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * When scopes are updated during enrollment, this field must be populated with the state sent to the partner in the OAuth Login URI. This field is required when the context is `ENROLLMENT`.
     */
    state?: string;
}
