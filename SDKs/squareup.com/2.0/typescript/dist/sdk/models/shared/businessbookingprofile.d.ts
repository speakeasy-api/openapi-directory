import { SpeakeasyBase } from "../../../internal/utils";
import { BusinessAppointmentSettings } from "./businessappointmentsettings";
export declare class BusinessBookingProfile extends SpeakeasyBase {
    /**
     * Indicates whether customers can cancel or reschedule their own bookings (`true`) or not (`false`).
     */
    allowUserCancel?: boolean;
    /**
     * Indicates whether the seller is open for booking.
     */
    bookingEnabled?: boolean;
    /**
     * The policy for the seller to automatically accept booking requests (`ACCEPT_ALL`) or not (`REQUIRES_ACCEPTANCE`).
     */
    bookingPolicy?: string;
    /**
     * The service appointment settings, including where and how the service is provided.
     */
    businessAppointmentSettings?: BusinessAppointmentSettings;
    /**
     * The RFC 3339 timestamp specifying the booking's creation time.
     */
    createdAt?: string;
    /**
     * The choice of customer's time zone information of a booking.
     *
     * @remarks
     * The Square online booking site and all notifications to customers uses either the seller location’s time zone
     * or the time zone the customer chooses at booking.
     */
    customerTimezoneChoice?: string;
    /**
     * The ID of the seller, obtainable using the Merchants API.
     */
    sellerId?: string;
}
