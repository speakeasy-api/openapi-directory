import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/originator/get`
 */
export declare class TransferOriginatorGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Client ID of the end customer (i.e. the originator).
     */
    originatorClientId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
