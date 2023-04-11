import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies options for initializing Link for use with the Payment Initiation (Europe) product. This field is required if `payment_initiation` is included in the `products` array. Either `payment_id` or `consent_id` must be provided.
 */
export declare class LinkTokenCreateRequestPaymentInitiation extends SpeakeasyBase {
    /**
     * The `consent_id` provided by the `/payment_initiation/consent/create` endpoint.
     */
    consentId?: string;
    /**
     * The `payment_id` provided by the `/payment_initiation/payment/create` endpoint.
     */
    paymentId?: string;
}
