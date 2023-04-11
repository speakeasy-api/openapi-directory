import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PatternsGetPatternByRunExpandEnum {
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
export declare enum PatternsGetPatternByRunRouteTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class PatternsGetPatternByRunRequest extends SpeakeasyBase {
    /**
     * Filter by the date and time of the request (ISO 8601 UTC format)
     */
    dateUtc?: Date;
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * List of objects to be returned in full (i.e. expanded) - options include: All, Stop, Route, Run, Direction, Disruption, VehiclePosition, VehicleDescriptor and None. Default is Disruption. Run must be expanded to receive VehiclePosition and VehicleDescriptor information.
     */
    expand: PatternsGetPatternByRunExpandEnum[];
    /**
     * Indicates if geopath data will be returned (default = false)
     */
    includeGeopath?: boolean;
    /**
     * Include any skipped stops in a stopping pattern. Defaults to false.
     */
    includeSkippedStops?: boolean;
    /**
     * Number identifying transport mode; values returned via RouteTypes API
     */
    routeType: PatternsGetPatternByRunRouteTypeEnum;
    /**
     * The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.
     */
    runRef: string;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Filter by stop_id; values returned by Stops API
     */
    stopId?: number;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class PatternsGetPatternByRunResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * The stopping pattern of the specified run_ref and route type. (NOTE: the departure sequence field should be used to sort departures in chronological order, however it is not always N+1 or N-1 of the previous or following departure. e.g 100, 200, 250, 300 instead of 1, 2, 3, 4)
     */
    v3StoppingPattern?: shared.V3StoppingPattern;
}
