import { SpeakeasyBase } from "../../../internal/utils";
import { SearchAvailabilityQuery } from "./searchavailabilityquery";
/**
 * An object containing the fields to POST for the request.
 *
 * @remarks
 *
 * See the corresponding object definition for field details.
 */
export declare class SearchAvailabilityRequest extends SpeakeasyBase {
    /**
     * Query conditions to search for availabilities of bookings.
     */
    query: SearchAvailabilityQuery;
}
