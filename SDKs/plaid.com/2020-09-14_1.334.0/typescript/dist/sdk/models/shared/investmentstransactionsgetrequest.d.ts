import { SpeakeasyBase } from "../../../internal/utils";
import { InvestmentsTransactionsGetRequestOptions } from "./investmentstransactionsgetrequestoptions";
/**
 * InvestmentsTransactionsGetRequest defines the request schema for `/investments/transactions/get`
 */
export declare class InvestmentsTransactionsGetRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The most recent date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD.
     */
    endDate: Date;
    /**
     * An optional object to filter `/investments/transactions/get` results. If provided, must be non-`null`.
     */
    options?: InvestmentsTransactionsGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * The earliest date for which to fetch transaction history. Dates should be formatted as YYYY-MM-DD.
     */
    startDate: Date;
}
