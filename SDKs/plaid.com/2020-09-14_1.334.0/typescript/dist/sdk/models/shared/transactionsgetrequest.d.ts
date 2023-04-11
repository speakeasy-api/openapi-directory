import { SpeakeasyBase } from "../../../internal/utils";
import { TransactionsGetRequestOptions } from "./transactionsgetrequestoptions";
/**
 * TransactionsGetRequest defines the request schema for `/transactions/get`
 */
export declare class TransactionsGetRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The latest date for which data should be returned. Dates should be formatted as YYYY-MM-DD.
     */
    endDate: Date;
    /**
     * An optional object to be used with the request. If specified, `options` must not be `null`.
     */
    options?: TransactionsGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The earliest date for which data should be returned. Dates should be formatted as YYYY-MM-DD.
     */
    startDate: Date;
}
