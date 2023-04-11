import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Details of the refund
 *
 * @remarks
 *
 * **Note**: Bookings that have not been confirmed by the supplier and have a status of `"PENDING"` will report an `itemPrice`, `refundAmount` and `refundPercentage` of `0`, as no fees are charged until the booking has been accepted by the supplier and its status is `"CONFIRMED"`.
 *
 */
export declare class RefundDetails extends SpeakeasyBase {
    /**
     * Three-letter code indicating the currency in which `itemPrice` and `refundAmount` are displayed
     */
    currencyCode?: string;
    /**
     * The merchant net price at the time this product was booked
     */
    itemPrice?: number;
    /**
     * Numeric currency amount that will be refunded if this booking is cancelled now
     */
    refundAmount?: number;
    /**
     * Percentage of the item price that will be refunded if this booking is cancelled now
     */
    refundPercentage?: number;
}
