import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Number identifying transport mode; values returned via RouteTypes API
 */
export declare enum StopsStopsForRouteRouteTypeEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class StopsStopsForRouteRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * An optional direction; values returned by Directions API. When this is set, stop sequence information is returned in the response.
     */
    directionId?: number;
    /**
     * Filter geopaths by date (ISO 8601 UTC format) (default = current date)
     */
    geopathUtc?: Date;
    /**
     * Indicates if geopath data will be returned (default = false)
     */
    includeGeopath?: boolean;
    /**
     * Identifier of route; values returned by Routes API - v3/routes
     */
    routeId: number;
    /**
     * Number identifying transport mode; values returned via RouteTypes API
     */
    routeType: StopsStopsForRouteRouteTypeEnum;
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Indicates if stop disruption information will be returned (default = false)
     */
    stopDisruptions?: boolean;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class StopsStopsForRouteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * All stops on the specified route.
     */
    v3StopsOnRouteResponse?: shared.V3StopsOnRouteResponse;
}
