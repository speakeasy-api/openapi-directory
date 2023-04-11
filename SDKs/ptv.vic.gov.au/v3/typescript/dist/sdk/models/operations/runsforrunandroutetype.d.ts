import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RunsForRunAndRouteTypeExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}
/**
 * Number identifying transport mode; values returned via RouteTypes API
 */
export declare enum RunsForRunAndRouteTypeRouteTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class RunsForRunAndRouteTypeRequest extends SpeakeasyBase {
    /**
     * Date of the request. (optional - defaults to now)
     */
    dateUtc?: Date;
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is None.
     */
    expand: RunsForRunAndRouteTypeExpandEnum[];
    /**
     * Indicates if geopath data will be returned (default = false)
     */
    includeGeopath?: boolean;
    /**
     * Number identifying transport mode; values returned via RouteTypes API
     */
    routeType: RunsForRunAndRouteTypeRouteTypeEnum;
    /**
     * The run_ref is the identifier of a run as returned by the departures/* and runs/* endpoints. WARNING, run_id is deprecated. Use run_ref instead.
     */
    runRef: string;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class RunsForRunAndRouteTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * The trip/service run details for the run_ref and route type specified.
     */
    v3RunResponse?: shared.V3RunResponse;
}
