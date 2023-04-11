import { SpeakeasyBase } from "../../../internal/utils";
import { NotesBookedRoom } from "./notesbookedroom";
import { NotesBooking } from "./notesbooking";
import { PersonInfo } from "./personinfo";
/**
 * How will the guest make payment for this booking?
 */
export declare enum UpdateBookingRequestPaymentTypeEnum {
    Api = "API"
}
export declare class UpdateBookingRequestRooms extends SpeakeasyBase {
    /**
     * The number of adult guests staying in the room.
     */
    adults: number;
    /**
     * Notes about this booked room. These might be requests for room setup (e.g. extra beds or requests to remove alcoholic beverages from the minibar) or other requests related to this particular booked room.
     *
     * @remarks
     * These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.
     */
    notes?: NotesBookedRoom;
    /**
     * The unique identifier of this rate within Impala. Every rate returned in the `roomTypes[].rates[]` array when retrieving hotel availability includes this id.
     */
    rateId: string;
}
/**
 * Specifies the room you want to book for your guest.
 */
export declare class UpdateBookingRequest extends SpeakeasyBase {
    /**
     * Details of your guest (will be provided to the hotel in case of questions).
     */
    bookingContact: PersonInfo;
    /**
     * The last day of the desired stay range in ISO 8601 format YYYY-MM-DD.
     */
    end: Date;
    /**
     * Notes allow sellers to their guests to communicate relevant information to the hotel.
     */
    notes?: NotesBooking;
    /**
     * How will the guest make payment for this booking?
     */
    paymentType?: UpdateBookingRequestPaymentTypeEnum;
    /**
     * List of room type identifiers to be booked.
     */
    rooms: UpdateBookingRequestRooms[];
    /**
     * The first day of the desired stay range in ISO 8601 format YYYY-MM-DD.
     */
    start: Date;
    /**
     * The timestamp of when the booking was last updated
     */
    updateBookingVersionAtTimestamp: Date;
}
