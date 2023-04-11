import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Routing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Reachable Range
     *
     * @remarks
     * Calculates a set of locations that can be reached from the origin point.
     */
    getRoutingVersionNumberCalculateReachableRangeOriginContentType(req: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse>;
    /**
     * Calculate Route
     *
     * @remarks
     * Calculates a route between an origin and a destination.
     */
    getRoutingVersionNumberCalculateRouteLocationsContentType(req: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse>;
    /**
     * Reachable Range
     *
     * @remarks
     * Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
     */
    postRoutingVersionNumberCalculateReachableRangeOriginContentTypeJson(req: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeJsonResponse>;
    /**
     * Reachable Range
     *
     * @remarks
     * Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
     */
    postRoutingVersionNumberCalculateReachableRangeOriginContentTypeRaw(req: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRawResponse>;
    /**
     * Calculate Route
     *
     * @remarks
     * Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
     */
    postRoutingVersionNumberCalculateRouteLocationsContentTypeJson(req: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeJsonResponse>;
    /**
     * Calculate Route
     *
     * @remarks
     * Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
     */
    postRoutingVersionNumberCalculateRouteLocationsContentTypeRaw(req: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRawResponse>;
}
