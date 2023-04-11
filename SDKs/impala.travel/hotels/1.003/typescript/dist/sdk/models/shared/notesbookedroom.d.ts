import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Notes about this booked room. These might be requests for room setup (e.g. extra beds or requests to remove alcoholic beverages from the minibar) or other requests related to this particular booked room.
 *
 * @remarks
 * These fields allow for **Markdown formatting** that's displayed to hotels in its rendered format in most circumstances but might fall back to text-only in scenarios where that's not possible.
 */
export declare class NotesBookedRoom extends SpeakeasyBase {
    /**
     * Notes your guest has entered as part of the booking for this booked room. These allow them to communicate anything noteworthy about this booked room to the hotel, e.g. special instructions around room setup, that the minibar should not contain any alcoholic beverages or a wheelchair-accessible room is required.
     */
    fromGuest: string;
    /**
     * Notes from you as a seller allow you to communicate any instructions for this booked room. These are communicated to the hotel as coming from you. You can use this field to provide the hotel with pointers about e.g. room setup, connecting doors that need to be opened, extrabeds to be placed in the rooms or any other instructions.
     */
    fromSeller: string;
}
