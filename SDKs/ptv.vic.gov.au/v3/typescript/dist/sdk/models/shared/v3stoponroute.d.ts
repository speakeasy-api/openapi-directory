import { SpeakeasyBase } from "../../../internal/utils";
import { V3StopTicket } from "./v3stopticket";
export declare class V3StopOnRoute extends SpeakeasyBase {
    /**
     * Disruption information identifier(s)
     */
    disruptionIds?: number[];
    /**
     * Transport mode identifier
     */
    routeType?: number;
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
    stopTicket?: V3StopTicket;
}
