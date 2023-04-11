import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationConsentGetRequest defines the request schema for `/payment_initiation/consent/get`
 */
export declare class PaymentInitiationConsentGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The `consent_id` returned from `/payment_initiation/consent/create`.
     */
    consentId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
