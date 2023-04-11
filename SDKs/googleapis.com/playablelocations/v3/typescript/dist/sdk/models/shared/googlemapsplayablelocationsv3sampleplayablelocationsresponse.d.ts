import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleMapsPlayablelocationsV3SamplePlayableLocationList } from "./googlemapsplayablelocationsv3sampleplayablelocationlist";
/**
 *  Response for the SamplePlayableLocations method.
 */
export declare class GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse extends SpeakeasyBase {
    /**
     * Each PlayableLocation object corresponds to a game_object_type specified in the request.
     */
    locationsPerGameObjectType?: Record<string, GoogleMapsPlayablelocationsV3SamplePlayableLocationList>;
    /**
     * Required. Specifies the "time-to-live" for the set of playable locations. You can use this value to determine how long to cache the set of playable locations. After this length of time, your back-end game server should issue a new SamplePlayableLocations request to get a fresh set of playable locations (because for example, they might have been removed, a park might have closed for the day, a business might have closed permanently).
     */
    ttl?: string;
}
