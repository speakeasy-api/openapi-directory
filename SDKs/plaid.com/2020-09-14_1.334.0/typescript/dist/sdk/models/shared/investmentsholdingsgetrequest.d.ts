import { SpeakeasyBase } from "../../../internal/utils";
import { InvestmentHoldingsGetRequestOptions } from "./investmentholdingsgetrequestoptions";
/**
 * InvestmentsHoldingsGetRequest defines the request schema for `/investments/holdings/get`
 */
export declare class InvestmentsHoldingsGetRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to filter `/investments/holdings/get` results. If provided, must not be `null`.
     */
    options?: InvestmentHoldingsGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
