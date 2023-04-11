import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum StopsStopsByGeolocationRouteTypesEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class StopsStopsByGeolocationRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Geographic coordinate of latitude
     */
    latitude: number;
    /**
     * Geographic coordinate of longitude
     */
    longitude: number;
    /**
     * Filter by maximum distance (in metres) from location specified via latitude and longitude parameters (default = 300)
     */
    maxDistance?: number;
    /**
     * Maximum number of results returned (default = 30)
     */
    maxResults?: number;
    /**
     * Filter by route_type; values returned via RouteTypes API
     */
    routeTypes?: StopsStopsByGeolocationRouteTypesEnum[];
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
export declare class StopsStopsByGeolocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * All stops near the specified location.
     */
    v3StopsByDistanceResponse?: shared.V3StopsByDistanceResponse;
}
