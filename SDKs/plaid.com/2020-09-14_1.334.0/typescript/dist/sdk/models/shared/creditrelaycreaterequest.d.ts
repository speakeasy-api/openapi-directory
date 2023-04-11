import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CreditRelayCreateRequest defines the request schema for `/credit/relay/create`
 */
export declare class CreditRelayCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * List of report token strings, with at most one token of each report type. Currently only Asset Report token is supported.
     */
    reportTokens: string[];
    /**
     * The `secondary_client_id` is the client id of the third party with whom you would like to share the relay token.
     */
    secondaryClientId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
    /**
     * URL to which Plaid will send webhooks when the Secondary Client successfully retrieves an Asset Report by calling `/credit/relay/get`.
     */
    webhook?: string;
}
