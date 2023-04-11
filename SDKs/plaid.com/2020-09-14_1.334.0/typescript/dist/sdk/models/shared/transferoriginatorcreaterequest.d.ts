import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines the request schema for `/transfer/originator/create`
 */
export declare class TransferOriginatorCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The company name of the end customer being created. This will be displayed in public-facing surfaces, e.g. Plaid Dashboard.
     */
    companyName: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
