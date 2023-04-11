import { SpeakeasyBase } from "../../../internal/utils";
/**
 * WebhookVerificationKeyGetRequest defines the request schema for `/webhook_verification_key/get`
 */
export declare class WebhookVerificationKeyGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The key ID ( `kid` ) from the JWT header.
     */
    keyId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
