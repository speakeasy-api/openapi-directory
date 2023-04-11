import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RunsForRouteAndRouteTypeExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}
/**
 * Number identifying transport mode; values returned via RouteTypes API
 */
export declare enum RunsForRouteAndRouteTypeRouteTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class RunsForRouteAndRouteTypeRequest extends SpeakeasyBase {
    /**
     * Date of the request. (optional - defaults to now)
     */
    dateUtc?: Date;
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * List of objects to be returned in full (i.e. expanded) - options include: All, VehiclePosition, VehicleDescriptor, or None. Default is All.
     */
    expand: RunsForRouteAndRouteTypeExpandEnum[];
    /**
     * Identifier of route; values returned by Routes API - v3/routes.
     */
    routeId: number;
    /**
     * Number identifying transport mode; values returned via RouteTypes API
     */
    routeType: RunsForRouteAndRouteTypeRouteTypeEnum;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class RunsForRouteAndRouteTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * All trip/service run details for the specified route ID and route type.
     */
    v3RunsResponse?: shared.V3RunsResponse;
}
