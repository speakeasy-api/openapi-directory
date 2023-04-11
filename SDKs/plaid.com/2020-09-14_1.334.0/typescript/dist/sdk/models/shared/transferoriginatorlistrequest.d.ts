import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/originator/list`
 */
export declare class TransferOriginatorListRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The maximum number of originators to return.
     */
    count?: number;
    /**
     * The number of originators to skip before returning results.
     */
    offset?: number;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
