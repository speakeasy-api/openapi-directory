import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * ListLocationsResponse returns the list of all GKE locations and their recommendation state.
 */
export declare class ListLocationsResponse extends SpeakeasyBase {
    /**
     * A full list of GKE locations.
     */
    locations?: Location[];
    /**
     * Only return ListLocationsResponse that occur after the page_token. This value should be populated from the ListLocationsResponse.next_page_token if that response token was set (which happens when listing more Locations than fit in a single ListLocationsResponse).
     */
    nextPageToken?: string;
}
