import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RoutesRouteFromIdRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Filter geopaths by date (ISO 8601 UTC format) (default = current date)
     */
    geopathUtc?: Date;
    /**
     * Indicates kif geopath data will be returned (default = false)
     */
    includeGeopath?: boolean;
    /**
     * Identifier of route; values returned by Departures, Directions and Disruptions APIs
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
export declare class RoutesRouteFromIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * The route name and number for the specified route ID.
     */
    v3RouteResponse?: shared.V3RouteResponse;
}
