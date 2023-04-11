import { SpeakeasyBase } from "../../../internal/utils";
import { Booking } from "./booking";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class CreateBookingRequest extends SpeakeasyBase {
    /**
     * Represents a booking as a time-bound service contract for a seller's staff member to provide a specified service
     *
     * @remarks
     * at a given location to a requesting customer in one or more appointment segments.
     */
    booking: Booking;
    /**
     * A unique key to make this request an idempotent operation.
     */
    idempotencyKey?: string;
}
