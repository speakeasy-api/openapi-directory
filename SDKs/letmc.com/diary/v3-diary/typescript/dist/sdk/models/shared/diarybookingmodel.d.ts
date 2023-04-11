import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a viewing booking slot
 */
export declare class DiaryBookingModel extends SpeakeasyBase {
    /**
     * The end time of the booking
     */
    end?: Date;
    /**
     * The unique ID of the staff member this booking is with
     */
    staffID?: string;
    /**
     * The name of the staff member this booking is with
     */
    staffName?: string;
    /**
     * The start time of the booking
     */
    start?: Date;
}
