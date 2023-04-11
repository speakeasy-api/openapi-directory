import { SpeakeasyBase } from "../../../internal/utils";
import { V3DisruptionDirection } from "./v3disruptiondirection";
export declare class V3DisruptionRoute extends SpeakeasyBase {
    direction?: V3DisruptionDirection;
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
     * Route number presented to public (i.e. not route_id)
     */
    routeNumber?: string;
    /**
     * Transport mode identifier
     */
    routeType?: number;
}
