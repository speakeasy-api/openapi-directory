import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Response message for Locations.ListLocations.
 */
export declare class ListLocationsResponse extends SpeakeasyBase {
    /**
     * The locations.
     */
    locations?: Location[];
    /**
     * If the number of locations exceeded the requested page size, this field is populated with a token to fetch the next page of locations on a subsequent call to `ListLocations`. If there are no more locations, this field is not present in the response.
     */
    nextPageToken?: string;
    /**
     * The approximate number of Locations in the list irrespective of pagination.
     */
    totalSize?: number;
}
