import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleTypeLatLng } from "./googletypelatlng";
/**
 * A geographical point suitable for placing game objects in location-based games.
 */
export declare class GoogleMapsPlayablelocationsV3SamplePlayableLocation extends SpeakeasyBase {
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    centerPoint?: GoogleTypeLatLng;
    /**
     * Required. The name of this playable location.
     */
    name?: string;
    /**
     * A [place ID] (https://developers.google.com/places/place-id)
     */
    placeId?: string;
    /**
     * A [plus code] (http://openlocationcode.com)
     */
    plusCode?: string;
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    snappedPoint?: GoogleTypeLatLng;
    /**
     * A collection of [Playable Location Types](/maps/documentation/gaming/tt/types) for this playable location. The first type in the collection is the primary type. Type information might not be available for all playable locations.
     */
    types?: string[];
}
