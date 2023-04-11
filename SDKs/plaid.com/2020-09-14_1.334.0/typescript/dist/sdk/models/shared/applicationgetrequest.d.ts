import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ApplicationGetRequest defines the schema for `/application/get`
 */
export declare class ApplicationGetRequest extends SpeakeasyBase {
    /**
     * This field will map to the application ID that is returned from /item/applications/list, or provided to the institution in an oauth redirect.
     */
    applicationId: string;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret: string;
}
