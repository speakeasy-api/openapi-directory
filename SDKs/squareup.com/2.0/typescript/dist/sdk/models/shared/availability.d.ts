import { SpeakeasyBase } from "../../../internal/utils";
import { AppointmentSegment } from "./appointmentsegment";
/**
 * Describes a slot available for booking, encapsulating appointment segments, the location and starting time.
 */
export declare class Availability extends SpeakeasyBase {
    /**
     * The list of appointment segments available for booking
     */
    appointmentSegments?: AppointmentSegment[];
    /**
     * The ID of the location available for booking.
     */
    locationId?: string;
    /**
     * The RFC 3339 timestamp specifying the beginning time of the slot available for booking.
     */
    startAt?: string;
}
