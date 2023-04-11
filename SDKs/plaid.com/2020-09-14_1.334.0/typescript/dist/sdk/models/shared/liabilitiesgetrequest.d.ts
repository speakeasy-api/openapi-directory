import { SpeakeasyBase } from "../../../internal/utils";
import { LiabilitiesGetRequestOptions } from "./liabilitiesgetrequestoptions";
/**
 * LiabilitiesGetRequest defines the request schema for `/liabilities/get`
 */
export declare class LiabilitiesGetRequest extends SpeakeasyBase {
    /**
     * The access token associated with the Item data is being requested for.
     */
    accessToken: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * An optional object to filter `/liabilities/get` results. If provided, `options` cannot be null.
     */
    options?: LiabilitiesGetRequestOptions;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
