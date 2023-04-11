import { SpeakeasyBase } from "../../../internal/utils";
import { V3RouteServiceStatus } from "./v3routeservicestatus";
export declare class V3ResultRoute extends SpeakeasyBase {
    /**
     * GTFS Identifer of the route
     */
    routeGtfsId?: string;
    /**
     * Route identifier
     */
    routeId?: number;
    /**
     * Name of route
     */
    routeName?: string;
    /**
     * Route number presented to public (nb. not route_id)
     */
    routeNumber?: string;
    routeServiceStatus?: V3RouteServiceStatus;
    /**
     * Transport mode identifier
     */
    routeType?: number;
}
