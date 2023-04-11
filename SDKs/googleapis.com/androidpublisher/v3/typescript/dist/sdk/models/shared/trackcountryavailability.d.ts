import { SpeakeasyBase } from "../../../internal/utils";
import { TrackTargetedCountry } from "./tracktargetedcountry";
/**
 * Resource for per-track country availability information.
 */
export declare class TrackCountryAvailability extends SpeakeasyBase {
    /**
     * A list of one or more countries where artifacts in this track are available. This list includes all countries that are targeted by the track, even if only specific carriers are targeted in that country.
     */
    countries?: TrackTargetedCountry[];
    /**
     * Whether artifacts in this track are available to "rest of the world" countries.
     */
    restOfWorld?: boolean;
    /**
     * Whether this track's availability is synced with the default production track. See https://support.google.com/googleplay/android-developer/answer/7550024 for more information on syncing country availability with production. Note that if this is true, the returned "countries" and "rest_of_world" fields will reflect the values for the default production track.
     */
    syncWithProduction?: boolean;
}
