import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
import { PaymentRefund } from "./paymentrefund";
/**
 * Defines the response returned by [GetRefund](https://developer.squareup.com/reference/square_2021-08-18/refunds-api/get-payment-refund).
 *
 * @remarks
 *
 * Note: If there are errors processing the request, the refund field might not be
 * present or it might be present in a FAILED state.
 */
export declare class GetPaymentRefundResponse extends SpeakeasyBase {
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
