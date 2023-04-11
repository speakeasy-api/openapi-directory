import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request to list a historical log of user consent events.
 */
export declare class ItemActivityListRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken?: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    count?: number;
    /**
     * Cursor used for pagination.
     */
    cursor?: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
