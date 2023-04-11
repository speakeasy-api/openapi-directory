import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * The response message for Locations.ListLocations.
 */
export declare class ListLocationsResponse extends SpeakeasyBase {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: Location[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
}
