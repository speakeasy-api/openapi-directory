import { SpeakeasyBase } from "../../../internal/utils";
import { SearchAvailabilityFilter } from "./searchavailabilityfilter";
/**
 * Query conditions to search for availabilities of bookings.
 */
export declare class SearchAvailabilityQuery extends SpeakeasyBase {
    /**
     * A query filter to search for availabilities by.
     */
    filter: SearchAvailabilityFilter;
}
