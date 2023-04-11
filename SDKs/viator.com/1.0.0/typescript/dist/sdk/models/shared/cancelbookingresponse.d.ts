import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CancelBookingResponseReasonEnum {
    AlreadyCancelled = "ALREADY_CANCELLED",
    NotCancellable = "NOT_CANCELLABLE"
}
/**
 * String indicating the outcome of the booking cancellation request.
 *
 * @remarks
 *
 *   * `ACCEPTED`: The cancellation was successful
 *   * `DECLINED`: The cancellation failed
 *
 */
export declare enum CancelBookingResponseStatusEnum {
    Accepted = "ACCEPTED",
    Declined = "DECLINED"
}
/**
 * Success
 */
export declare class CancelBookingResponse extends SpeakeasyBase {
    /**
     * Booking reference number for this booking, prepended with `BR-`
     */
    bookingId?: string;
    reason?: CancelBookingResponseReasonEnum;
    /**
     * String indicating the outcome of the booking cancellation request.
     *
     * @remarks
     *
     *   * `ACCEPTED`: The cancellation was successful
     *   * `DECLINED`: The cancellation failed
     *
     */
    status?: CancelBookingResponseStatusEnum;
}
