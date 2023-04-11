import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationPaymentCreateRequest defines the request schema for `/payment_initiation/payment/create`
 */
export declare class PaymentInitiationPaymentCreateRequest extends SpeakeasyBase {
    /**
     * The amount and currency of a payment
     */
    amount: Record<string, any>;
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * Additional payment options
     */
    options?: Record<string, any>;
    /**
     * The ID of the recipient the payment is for.
     */
    recipientId: string;
    /**
     * A reference for the payment. This must be an alphanumeric string with at most 18 characters and must not contain any special characters (since not all institutions support them).
     *
     * @remarks
     * In order to track settlement via Payment Confirmation, each payment must have a unique reference. If the reference provided through the API is not unique, Plaid will adjust it.
     * Both the originally provided and automatically adjusted references (if any) can be found in the `reference` and `adjusted_reference` fields, respectively.
     */
    reference: string;
    /**
     * The schedule that the payment will be executed on. If a schedule is provided, the payment is automatically set up as a standing order. If no schedule is specified, the payment will be executed only once.
     */
    schedule?: Record<string, any>;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
