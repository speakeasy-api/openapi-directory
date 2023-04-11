import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum RoutesOneOrMoreRoutesRouteTypesEnum {
    Zero = "0",
    One = "1",
    Two = "2",
    Three = "3",
    Four = "4"
}
export declare class RoutesOneOrMoreRoutesRequest extends SpeakeasyBase {
    /**
     * Your developer id
     */
    devid?: string;
    /**
     * Filter by name  of route (accepts partial route name matches)
     */
    routeName?: string;
    /**
     * Filter by route_type; values returned via RouteTypes API
     */
    routeTypes?: RoutesOneOrMoreRoutesRouteTypesEnum[];
    /**
     * Authentication signature for request
     */
    signature?: string;
    /**
     * Please ignore
     */
    token?: string;
}
export declare class RoutesOneOrMoreRoutesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid Request
     */
    v3ErrorResponse?: shared.V3ErrorResponse;
    /**
     * Route names and numbers for all routes of all route types.
     */
    v3RouteResponse?: shared.V3RouteResponse;
}
