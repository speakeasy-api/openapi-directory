import { SpeakeasyBase } from "../../../internal/utils";
/**
 * PaymentInitiationPaymentGetRequest defines the request schema for `/payment_initiation/payment/get`
 */
export declare class PaymentInitiationPaymentGetRequest extends SpeakeasyBase {
    /**
     * Your Plaid API `client_id`. The `client_id` is required and may be provided either in the `PLAID-CLIENT-ID` header or as part of a request body.
     */
    clientId?: string;
    /**
     * The `payment_id` returned from `/payment_initiation/payment/create`.
     */
    paymentId: string;
    /**
     * Your Plaid API `secret`. The `secret` is required and may be provided either in the `PLAID-SECRET` header or as part of a request body.
     */
    secret?: string;
}
