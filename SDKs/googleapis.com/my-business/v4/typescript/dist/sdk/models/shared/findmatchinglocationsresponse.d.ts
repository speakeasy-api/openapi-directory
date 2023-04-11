import { SpeakeasyBase } from "../../../internal/utils";
import { MatchedLocation } from "./matchedlocation";
/**
 * Response message for Locations.FindMatchingLocations.
 */
export declare class FindMatchingLocationsResponse extends SpeakeasyBase {
    /**
     * When the matching algorithm was last executed for this location.
     */
    matchTime?: string;
    /**
     * A collection of locations that are potential matches to the specified location, listed in order from best to least match. If there is an exact match, it will be in the first position.
     */
    matchedLocations?: MatchedLocation[];
}
