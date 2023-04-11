import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RunsForRouteExpandEnum {
    All = "All",
    VehicleDescriptor = "VehicleDescriptor",
    VehiclePosition = "VehiclePosition",
    None = "None"
}
export declare class RunsForRouteRequest extends SpeakeasyBase {
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
    expand?: RunsForRouteExpandEnum[];
    /**
     * Identifier of route; values returned by Routes API - v3/routes.
     */
    routeId: number;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class RunsForRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * All trip/service run details for the specified route ID.
     */
    v3RunsResponse?: shared.V3RunsResponse;
}
