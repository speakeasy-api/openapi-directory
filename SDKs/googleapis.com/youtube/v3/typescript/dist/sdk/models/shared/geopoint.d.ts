import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Geographical coordinates of a point, in WGS84.
 */
export declare class GeoPoint extends SpeakeasyBase {
    /**
     * Altitude above the reference ellipsoid, in meters.
     */
    altitude?: number;
    /**
     * Latitude in degrees.
     */
    latitude?: number;
    /**
     * Longitude in degrees.
     */
    longitude?: number;
}
