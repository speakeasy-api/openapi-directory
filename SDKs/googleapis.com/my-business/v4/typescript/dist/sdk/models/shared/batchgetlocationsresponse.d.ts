import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
/**
 * Response message for Locations.BatchGetLocations.
 */
export declare class BatchGetLocationsResponse extends SpeakeasyBase {
    /**
     * A collection of locations.
     */
    locations?: Location[];
}
