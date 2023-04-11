import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Notes allow sellers to their guests to communicate relevant information to the hotel.
 */
export declare class NotesBooking extends SpeakeasyBase {
    /**
     * Notes a guest has entered as they made the book can be added here. This allows you to display a free text field to your guests where they can enter any information they want to communicate to the hotel (e.g. that their booking is for a special occassion or that they have a particular room preference).
     */
    fromGuest?: string;
    /**
     * Notes you as a seller want to communicate to the hotel. You might use this field to communicate operational processes to watch out for (e.g. providing the hotel with context around where the booking was made or what to watch out for) or information about the guest.
     */
    fromSeller?: string;
}
