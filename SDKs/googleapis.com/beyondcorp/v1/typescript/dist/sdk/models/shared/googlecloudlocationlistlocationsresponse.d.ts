import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudLocationLocation } from "./googlecloudlocationlocation";
/**
 * The response message for Locations.ListLocations.
 */
export declare class GoogleCloudLocationListLocationsResponse extends SpeakeasyBase {
    /**
     * A list of locations that matches the specified filter in the request.
     */
    locations?: GoogleCloudLocationLocation[];
    /**
     * The standard List next-page token.
     */
    nextPageToken?: string;
}
