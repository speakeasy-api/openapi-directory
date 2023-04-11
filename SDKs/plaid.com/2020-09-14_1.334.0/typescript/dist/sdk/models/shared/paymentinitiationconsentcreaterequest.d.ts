import { SpeakeasyBase } from "../../../internal/utils";
import { PaymentInitiationConsentScopeEnum } from "./paymentinitiationconsentscopeenum";
/**
 * PaymentInitiationConsentCreateRequest defines the request schema for `/payment_initiation/consent/create`
 */
export declare class PaymentInitiationConsentCreateRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Limitations that will be applied to payments initiated using the payment consent.
     */
    constraints: Record<string, any>;
    /**
     * Additional payment consent options
     */
    options?: Record<string, any>;
    /**
     * The ID of the recipient the payment consent is for. The created consent can be used to transfer funds to this recipient only.
     */
    recipientId: string;
    /**
     * A reference for the payment consent. This must be an alphanumeric string with at most 18 characters and must not contain any special characters.
     */
    reference: string;
    /**
     * An array of payment consent scopes.
     */
    scopes: PaymentInitiationConsentScopeEnum[];
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
