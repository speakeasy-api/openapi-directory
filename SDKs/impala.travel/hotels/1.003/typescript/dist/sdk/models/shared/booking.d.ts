import { SpeakeasyBase } from "../../../internal/utils";
import { BookedRoom } from "./bookedroom";
import { CancellationFee } from "./cancellationfee";
import { HotelStub } from "./hotelstub";
/**
 * Returned in case the booking (or parts of it) has been cancelled. Contains information on the cancellation.
 */
export declare class BookingCancellation extends SpeakeasyBase {
    /**
     * Describes the costs associated with a cancellation and how it is calculated.
     */
    fee: CancellationFee;
}
/**
 * Information on a person and their contact details.
 */
export declare class BookingPerson extends SpeakeasyBase {
    /**
     * Unique identifier of this guest within the Impala platform.
     */
    contactId: string;
    /**
     * Email address.
     */
    email: string;
    /**
     * First name.
     */
    firstName: string;
    /**
     * Family name or surname.
     */
    lastName: string;
}
/**
 * The notes that were transmitted to the hotel as part of this booking.
 *
 * @remarks
 *
 * These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.
 */
export declare class BookingNotes extends SpeakeasyBase {
    /**
     * Notes your guest has entered as part of the booking. These allow them to communicate anything to the hotel (e.g. that they're travelling for a special occassion or have a particular room assignment preference).
     */
    fromGuest: string;
    /**
     * Notes you as a seller want to communicated to the hotel. These might be around operational processes to watch out for. Impala communicates these as coming from you.
     */
    fromSeller: string;
}
/**
 * Status of this booking within the Impala platform. When you make a booking, it'll first appear as `PENDING` until we receive the hotel's confirmation details. At this point your booking will move to `ACCEPTED`.
 */
export declare enum BookingStatusEnum {
    Cancelled = "CANCELLED",
    Pending = "PENDING",
    Accepted = "ACCEPTED",
    PaymentRequired = "PAYMENT_REQUIRED",
    PaymentAbandoned = "PAYMENT_ABANDONED"
}
/**
 * Details of an existing booking.
 */
export declare class Booking extends SpeakeasyBase {
    /**
     * List of rooms booked
     */
    bookedRooms: BookedRoom[];
    /**
     * Unique identifier for this booking within the Impala platform.
     */
    bookingId: string;
    /**
     * Returned in case the booking (or parts of it) has been cancelled. Contains information on the cancellation.
     */
    cancellation?: BookingCancellation;
    /**
     * Guest details for this booking.
     */
    contact: BookingPerson;
    /**
     * Date and time (in UTC and ISO 8601 format) when the booking was created.
     */
    createdAt: Date;
    /**
     * The departure date of the booking.
     */
    end: Date;
    /**
     * Essential information on a hotel returned as part of other resources, linking to the full resource within its `href` field.
     */
    hotel: HotelStub;
    /**
     * The hotel's confirmation identifier for this booking.
     */
    hotelConfirmationCode?: string;
    /**
     * The notes that were transmitted to the hotel as part of this booking.
     *
     * @remarks
     *
     * These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.
     */
    notes: BookingNotes;
    /**
     * If status is PAYMENT_REQUIRED, then this should be used as the Authorisation header for the POST to the /payments endpoint.
     */
    paymentBearerToken?: string;
    /**
     * If status is PAYMENT_REQUIRED, then this should be used as the client secret when rendering Impala Payment Elements in the UI.
     */
    paymentClientSecret?: string;
    /**
     * The arrival date of the booking.
     */
    start: Date;
    /**
     * Status of this booking within the Impala platform. When you make a booking, it'll first appear as `PENDING` until we receive the hotel's confirmation details. At this point your booking will move to `ACCEPTED`.
     */
    status: BookingStatusEnum;
    /**
     * Date and time (in UTC and ISO 8601 format) when the booking was last updated.
     */
    updatedAt: Date;
}
