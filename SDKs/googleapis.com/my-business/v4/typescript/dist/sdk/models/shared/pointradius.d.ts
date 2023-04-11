import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
/**
 * A radius around a particular point (latitude/longitude).
 */
export declare class PointRadius extends SpeakeasyBase {
    /**
     * An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees latitude and degrees longitude. Unless specified otherwise, this must conform to the WGS84 standard. Values must be within normalized ranges.
     */
    latlng?: LatLng;
    /**
     * The distance in kilometers of the area around the point.
     */
    radiusKm?: number;
}
