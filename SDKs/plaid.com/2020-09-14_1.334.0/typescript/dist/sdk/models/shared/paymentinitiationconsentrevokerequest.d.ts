import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationConsentRevokeRequest defines the request schema for `/payment_initiation/consent/revoke`
 */
export declare class PaymentInitiationConsentRevokeRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The consent ID.
     */
    consentId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
