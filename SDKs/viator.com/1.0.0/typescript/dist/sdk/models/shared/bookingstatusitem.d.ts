import { SpeakeasyBase } from "../../../internal/utils";
/**
 * **level** of *this* item's booking status
 */
export declare enum BookingStatusItemLevelEnum {
    Item = "ITEM",
    Itinerary = "ITINERARY"
}
/**
 * **specifier** of *this* item's booking status
 *
 * @remarks
 * * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)
 *
 */
export declare enum BookingStatusItemTypeEnum {
    Waiting = "WAITING",
    Confirmed = "CONFIRMED",
    Unavailable = "UNAVAILABLE",
    Pending = "PENDING",
    Failed = "FAILED",
    Cancelled = "CANCELLED",
    Expired = "EXPIRED",
    Amended = "AMENDED",
    PendingAmend = "PENDING_AMEND",
    Rejected = "REJECTED",
    OnHold = "ON_HOLD"
}
/**
 * **object** containing item booking status information
 */
export declare class BookingStatusItem extends SpeakeasyBase {
    /**
     * **indicator**: `true` if *this* item's booking has been amended
     */
    amended?: boolean;
    /**
     * **indicator**: `true` if *this* item's booking has been cancelled
     */
    cancelled?: boolean;
    /**
     * **indicator**: `true` if *this* item's booking is confirmed
     */
    confirmed?: boolean;
    /**
     * **indicator**: `true` if *this* item's booking has failed
     */
    failed?: boolean;
    /**
     * **level** of *this* item's booking status
     */
    level?: BookingStatusItemLevelEnum;
    /**
     * **indicator**: `true` if *this* item's booking is pending
     */
    pending?: boolean;
    /**
     * **numeric identifier** of *this* item's booking status
     */
    status?: number;
    /**
     * **natural-language description** of *this* item's booking status; e.g., 'Waiting to be booked'
     */
    text?: string;
    /**
     * **specifier** of *this* item's booking status
     *
     * @remarks
     * * See: [bookingStatus fields and meanings](#section/Appendices/bookingStatus-field-values-and-meanings)
     *
     */
    type?: BookingStatusItemTypeEnum;
}
