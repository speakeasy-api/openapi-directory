import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * A list of Locations. This is the response from the server to GET requests on the locations collection.
 */
export declare class LocationsListResponse extends SpeakeasyBase {
    /**
     * The list of locations.
     */
    items?: Location[];
    /**
     * The type of resource. This is always mirror#locationsList.
     */
    kind?: string;
}
