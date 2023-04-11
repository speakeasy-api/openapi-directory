import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DirectionsForRouteRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Identifier of route; values returned by Routes API - v3/routes
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
export declare class DirectionsForRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The directions that a specified route travels in.
     */
    v3DirectionsResponse?: shared.V3DirectionsResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
}
