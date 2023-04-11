import { SpeakeasyBase } from "../../../internal/utils";
import { Money } from "./money";
/**
 * The service appointment settings, including where and how the service is provided.
 */
export declare class BusinessAppointmentSettings extends SpeakeasyBase {
    /**
     * The time unit of the service duration for bookings.
     */
    alignmentTime?: string;
    /**
     * Indicates whether a customer can choose from all available time slots and have a staff member assigned
     *
     * @remarks
     * automatically (`true`) or not (`false`).
     */
    anyTeamMemberBookingEnabled?: boolean;
    /**
     * Represents an amount of money. `Money` fields can be signed or unsigned.
     *
     * @remarks
     * Fields that do not explicitly define whether they are signed or unsigned are
     * considered unsigned and can only hold positive amounts. For signed fields, the
     * sign of the value indicates the purpose of the money transfer. See
     * [Working with Monetary Amounts](https://developer.squareup.com/docs/build-basics/working-with-monetary-amounts)
     * for more information.
     */
    cancellationFeeMoney?: Money;
    /**
     * The cancellation policy adopted by the seller.
     */
    cancellationPolicy?: string;
    /**
     * The free-form text of the seller's cancellation policy.
     */
    cancellationPolicyText?: string;
    /**
     * The cut-off time in seconds for allowing clients to cancel or reschedule an appointment.
     */
    cancellationWindowSeconds?: number;
    /**
     * Types of the location allowed for bookings.
     */
    locationTypes?: string[];
    /**
     * The maximum number of daily appointments per team member or per location.
     */
    maxAppointmentsPerDayLimit?: number;
    /**
     * Indicates whether the daily appointment limit applies to team members or to
     *
     * @remarks
     * business locations.
     */
    maxAppointmentsPerDayLimitType?: string;
    /**
     * The maximum lead time in seconds before a service can be booked. Bookings must be created at most this far ahead of the booking's starting time.
     */
    maxBookingLeadTimeSeconds?: number;
    /**
     * The minimum lead time in seconds before a service can be booked. Bookings must be created at least this far ahead of the booking's starting time.
     */
    minBookingLeadTimeSeconds?: number;
    /**
     * Indicates whether a customer can book multiple services in a single online booking.
     */
    multipleServiceBookingEnabled?: boolean;
    /**
     * Indicates whether customers has an assigned staff member (`true`) or can select s staff member of their choice (`false`).
     */
    skipBookingFlowStaffSelection?: boolean;
}
