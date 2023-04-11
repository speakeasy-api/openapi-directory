import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for Locations.FindMatchingLocations.
 */
export declare class FindMatchingLocationsRequest extends SpeakeasyBase {
    /**
     * The preferred language for the matching location (in BCP-47 format).
     */
    languageCode?: string;
    /**
     * Deprecated. This field is ignored for all requests.
     */
    maxCacheDuration?: string;
    /**
     * The number of matches to return. The default value is 3, with a maximum of 10. Note that latency may increase if more are requested. There is no pagination.
     */
    numResults?: number;
}
