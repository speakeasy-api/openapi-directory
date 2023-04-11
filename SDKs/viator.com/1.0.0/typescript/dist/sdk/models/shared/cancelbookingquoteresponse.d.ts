import { SpeakeasyBase } from "../../../internal/utils";
import { RefundDetails } from "./refunddetails";
/**
 * String indicating the cancellation status of this itinerary item:
 *
 * @remarks
 *
 *   * `CANCELLABLE` - this booking is available to be cancelled
 *   * `CANCELLED` - this booking has already been cancelled
 *   * `NOT_CANCELLABLE` - this booking cannot be cancelled (because the product's operation date is now in the past)
 *
 */
export declare enum CancelBookingQuoteResponseStatusEnum {
    Cancellable = "CANCELLABLE",
    Cancelled = "CANCELLED",
    NotCancellable = "NOT_CANCELLABLE"
}
/**
 * Success
 */
export declare class CancelBookingQuoteResponse extends SpeakeasyBase {
    /**
     * The booking reference number, prepended with `BR-`
     */
    bookingId?: string;
    /**
     * Details of the refund
     *
     * @remarks
     *
     * **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
     *
     */
    refundDetails?: RefundDetails;
    /**
     * String indicating the cancellation status of this itinerary item:
     *
     * @remarks
     *
     *   * `CANCELLABLE` - this booking is available to be cancelled
     *   * `CANCELLED` - this booking has already been cancelled
     *   * `NOT_CANCELLABLE` - this booking cannot be cancelled (because the product's operation date is now in the past)
     *
     */
    status?: CancelBookingQuoteResponseStatusEnum;
}
