import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionsRecurringGetRequestOptions } from "./transactionsrecurringgetrequestoptions";
/**
 * TransactionsRecurringGetRequest defines the request schema for `/transactions/recurring/get`
 */
export declare class TransactionsRecurringGetRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * A list of `account_ids` to retrieve for the Item
     *
     * @remarks
     *
     * Note: An error will be returned if a provided `account_id` is not associated with the Item.
     */
    accountIds: string[];
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to be used with the request. If specified, `options` must not be `null`.
     */
    options?: TransactionsRecurringGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
