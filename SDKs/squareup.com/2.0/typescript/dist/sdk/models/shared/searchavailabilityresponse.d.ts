import { SpeakeasyBase } from "../../../internal/utils";
import { Availability } from "./availability";
import { ErrorT } from "./error";
/**
 * Success
 */
export declare class SearchAvailabilityResponse extends SpeakeasyBase {
    /**
     * List of slots available for booking.
     */
    availabilities?: Availability[];
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
}
