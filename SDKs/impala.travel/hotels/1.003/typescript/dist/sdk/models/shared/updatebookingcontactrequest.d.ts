import { SpeakeasyBase } from "../../../internal/utils";
import { PersonInfo } from "./personinfo";
/**
 * Request body for update contact booking
 */
export declare class UpdateBookingContactRequest extends SpeakeasyBase {
    /**
     * Information on a person and their contact details.
     */
    bookingContact: PersonInfo;
    /**
     * The timestamp of when the booking was last updated
     */
    updateBookingVersionAtTimestamp: Date;
}
