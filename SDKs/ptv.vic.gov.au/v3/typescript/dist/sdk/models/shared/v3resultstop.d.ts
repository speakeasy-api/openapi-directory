import { SpeakeasyBase } from "../../../internal/utils";
import { V3ResultRoute } from "./v3resultroute";
export declare class V3ResultStop extends SpeakeasyBase {
    /**
     * Transport mode identifier
     */
    routeType?: number;
    /**
     * List of routes travelling through the stop
     */
    routes?: V3ResultRoute[];
    /**
     * Distance of stop from input location (in metres); returns 0 if no location is input
     */
    stopDistance?: number;
    /**
     * Stop identifier
     */
    stopId?: number;
    /**
     * Landmark in proximity of stop
     */
    stopLandmark?: string;
    /**
     * Geographic coordinate of latitude at stop
     */
    stopLatitude?: number;
    /**
     * Geographic coordinate of longitude at stop
     */
    stopLongitude?: number;
    /**
     * Name of stop
     */
    stopName?: string;
    /**
     * Sequence of the stop on the route/run; return 0 when route_id or run_id not specified. Order ascendingly by this field (when non zero) to get physical order (earliest first) of stops on the route_id/run_id.
     */
    stopSequence?: number;
    /**
     * suburb of stop
     */
    stopSuburb?: string;
}
