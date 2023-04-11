import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { PaymentRefund } from "./paymentrefund";
/**
 * Defines the response returned by
 *
 * @remarks
 * [RefundPayment](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/refund-payment).
 *
 * If there are errors processing the request, the `refund` field might not be
 * present, or it might be present with a status of `FAILED`.
 */
export declare class RefundPaymentResponse extends SpeakeasyBase {
    /**
     * Information about errors encountered during the request.
     */
    errors?: ErrorT[];
    /**
     * Represents a refund of a payment made using Square. Contains information about
     *
     * @remarks
     * the original payment and the amount of money refunded.
     */
    refund?: PaymentRefund;
}
