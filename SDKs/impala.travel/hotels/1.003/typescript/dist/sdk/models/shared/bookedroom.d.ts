import { SpeakeasyBase } from "../../../internal/utils";
import { BookedRate } from "./bookedrate";
import { Money } from "./money";
import { NotesBookedRoom } from "./notesbookedroom";
/**
 * Booked room
 */
export declare class BookedRoomRoomType extends SpeakeasyBase {
    /**
     * The hotel's name for this room type.
     */
    name: string;
    /**
     * Unique identifier of this room type within the Impala platform.
     */
    roomTypeId: string;
}
export declare class BookedRoom extends SpeakeasyBase {
    /**
     * Number of adult guests booked for this room type.
     */
    adults?: number;
    /**
     * Notes about this booked room. These might be requests for room setup (e.g. extra beds or requests to remove alcoholic beverages from the minibar) or other requests related to this particular booked room.
     *
     * @remarks
     * These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.
     */
    notes: NotesBookedRoom;
    /**
     * Information on the price of the booked room, other components of the room (such as breakfast, lunch or a welcome drink) and the cancellation policies that apply.
     */
    rate: BookedRate;
    /**
     * Booked room
     */
    roomType: BookedRoomRoomType;
    /**
     * An amount of money in the specified currency (used in the context of prices, fees, refunds etc.)
     */
    sellerToImpalaPayment?: Money;
}
