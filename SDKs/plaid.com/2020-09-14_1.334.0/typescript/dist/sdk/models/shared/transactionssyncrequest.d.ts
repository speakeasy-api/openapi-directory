import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionsSyncRequestOptions } from "./transactionssyncrequestoptions";
/**
 * TransactionsSyncRequest defines the request schema for `/transactions/sync`
 */
export declare class TransactionsSyncRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The number of transaction updates to fetch.
     */
    count?: number;
    /**
     * The cursor value represents the last update requested. Providing it will cause the response to only return changes after this update.
     *
     * @remarks
     * If omitted, the entire history of updates will be returned, starting with the first-added transactions on the item.
     * Note: The upper-bound length of this cursor is 256 characters of base64.
     */
    cursor?: string;
    /**
     * An optional object to be used with the request. If specified, `options` must not be `null`.
     */
    options?: TransactionsSyncRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
