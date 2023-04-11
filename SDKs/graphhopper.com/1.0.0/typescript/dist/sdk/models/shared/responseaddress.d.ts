import { SpeakeasyBase } from "../../../internal/utils";
import { SnappedWaypoint } from "./snappedwaypoint";
/**
 * Address of activity
 */
export declare class ResponseAddress extends SpeakeasyBase {
    /**
     * Latitude of location.
     */
    lat?: number;
    /**
     * Specifies the id of the location.
     */
    locationId?: string;
    /**
     * Longitude of location.
     */
    lon?: number;
    /**
     * Name of location.
     */
    name?: string;
    /**
     * Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).
     */
    snappedWaypoint?: SnappedWaypoint;
    /**
     * Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
     */
    streetHint?: string;
}
