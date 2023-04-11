import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeparturesGetForStopAndRouteExpandEnum {
    All = "All",
    Stop = "Stop",
    Route = "Route",
    Run = "Run",
    Direction = "Direction",
    Disruption = "Disruption",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}
/**
 * Number identifying transport mode; values returned via RouteTypes API
 */
export declare enum DeparturesGetForStopAndRouteRouteTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class DeparturesGetForStopAndRouteRequest extends SpeakeasyBase {
    /**
     * Filter by the date and time of the request (ISO 8601 UTC format) (default = current date and time)
     */
    dateUtc?: Date;
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Filter by identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
     */
    directionId?: number;
    /**
     * List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor or None.
     *
     * @remarks
     *             Run must be expanded to receive VehiclePosition and VehicleDescriptor information.
     */
    expand?: DeparturesGetForStopAndRouteExpandEnum[];
    /**
     * Indicates that stop_id parameter will accept "GTFS stop_id" data
     */
    gtfs?: boolean;
    /**
     * Indicates if cancelled services (if they exist) are returned (default = false) - metropolitan train only
     */
    includeCancelled?: boolean;
    /**
     * Indicates if the route geopath should be returned
     */
    includeGeopath?: boolean;
    /**
     * Indicates if filtering runs (and their departures) to those that arrive at destination before date_utc (default = false). Requires max_results &gt; 0.
     */
    lookBackwards?: boolean;
    /**
     * Maximum number of results returned
     */
    maxResults?: number;
    /**
     * Identifier of route; values returned by Routes API - v3/routes
     */
    routeId: string;
    /**
     * Number identifying transport mode; values returned via RouteTypes API
     */
    routeType: DeparturesGetForStopAndRouteRouteTypeEnum;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Identifier of stop; values returned by Stops API
     */
    stopId: number;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class DeparturesGetForStopAndRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Service departures from the specified stop for the specified route (and route type); departures are timetabled and real-time (if applicable).
     */
    v3DeparturesResponse?: shared.V3DeparturesResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
}
