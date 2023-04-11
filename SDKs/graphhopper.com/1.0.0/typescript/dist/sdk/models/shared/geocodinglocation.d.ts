import { SpeakeasyBase } from "../../../internal/utils";
import { GeocodingPoint } from "./geocodingpoint";
export declare class GeocodingLocation extends SpeakeasyBase {
    /**
     * The city of the address
     */
    city?: string;
    /**
     * The country of the address
     */
    country?: string;
    /**
     * The housenumber of the address
     */
    housenumber?: string;
    /**
     * The name of the entity. Can be a boundary, POI, address, etc
     */
    name?: string;
    /**
     * The OSM ID of the entity
     */
    osmId?: string;
    /**
     * The OSM key of the entity
     */
    osmKey?: string;
    /**
     * N = node, R = relation, W = way
     */
    osmType?: string;
    point?: GeocodingPoint;
    /**
     * The postcode of the address
     */
    postcode?: string;
    /**
     * The state of the address
     */
    state?: string;
    /**
     * The street of the address
     */
    street?: string;
}
