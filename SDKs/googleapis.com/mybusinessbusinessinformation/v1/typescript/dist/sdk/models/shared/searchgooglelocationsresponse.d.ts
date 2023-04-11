import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleLocation } from "./googlelocation";
/**
 * Response message for GoogleLocations.SearchGoogleLocations.
 */
export declare class SearchGoogleLocationsResponse extends SpeakeasyBase {
    /**
     * A collection of GoogleLocations that are potential matches to the specified request, listed in order from most to least accuracy.
     */
    googleLocations?: GoogleLocation[];
}
