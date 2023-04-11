import { SpeakeasyBase } from "../../../internal/utils";
import { Booking } from "./booking";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class CreateBookingResponse extends SpeakeasyBase {
    /**
     * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
     *
     * @remarks
     * at a given location to a requesting customer in one or more appointment segments.
     */
    booking?: Booking;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
