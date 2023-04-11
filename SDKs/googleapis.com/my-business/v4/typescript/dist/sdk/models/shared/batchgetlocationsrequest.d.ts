import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for Locations.BatchGetLocations.
 */
export declare class BatchGetLocationsRequest extends SpeakeasyBase {
    /**
     * A collection of locations to fetch, specified by their names.
     */
    locationNames?: string[];
}
