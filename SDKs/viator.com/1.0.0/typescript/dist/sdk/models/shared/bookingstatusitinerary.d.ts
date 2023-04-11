import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **level** of *this* itinerary's booking status
 */
export declare enum BookingStatusItineraryLevelEnum {
    Item = "ITEM",
    Itinerary = "ITINERARY"
}
/**
 * **specifier** of *this* itinerary's booking status
 *
 * @remarks
 * * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)
 *
 */
export declare enum BookingStatusItineraryTypeEnum {
    Waiting = "WAITING",
    Confirmed = "CONFIRMED",
    Pending = "PENDING",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    Amended = "AMENDED",
    PendingAmend = "PENDING_AMEND"
}
/**
 * **object** containing itinerary booking status information
 */
export declare class BookingStatusItinerary extends SpeakeasyBase {
    /**
     * **indicator**: `true` if *this* itinerary's booking has been amended
     */
    amended?: boolean;
    /**
     * **indicator**: `true` if *this* itinerary's booking has been cancelled
     */
    cancelled?: boolean;
    /**
     * **indicator**: `true` if *this* itinerary's booking is confirmed
     */
    confirmed?: boolean;
    /**
     * **indicator**: `true` if *this* itinerary's booking has failed
     */
    failed?: boolean;
    /**
     * **level** of *this* itinerary's booking status
     */
    level?: BookingStatusItineraryLevelEnum;
    /**
     * **indicator**: `true` if *this* itinerary's booking is pending
     */
    pending?: boolean;
    /**
     * **numeric identifier** of *this* itinerary's booking status
     */
    status?: number;
    /**
     * **natural-language description** of *this* itinerary's booking status
     */
    text?: string;
    /**
     * **specifier** of *this* itinerary's booking status
     *
     * @remarks
     * * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)
     *
     */
    type?: BookingStatusItineraryTypeEnum;
}
