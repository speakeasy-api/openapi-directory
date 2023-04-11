import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Number identifying transport mode; values returned via RouteTypes API
 */
export declare enum DirectionsForDirectionAndTypeRouteTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class DirectionsForDirectionAndTypeRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Identifier of direction of travel; values returned by Directions API - /v3/directions/route/{route_id}
     */
    directionId: number;
    /**
     * Number identifying transport mode; values returned via RouteTypes API
     */
    routeType: DirectionsForDirectionAndTypeRouteTypeEnum;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class DirectionsForDirectionAndTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * All routes of the specified route type that travel in the specified direction.
     */
    v3DirectionsResponse?: shared.V3DirectionsResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
}
