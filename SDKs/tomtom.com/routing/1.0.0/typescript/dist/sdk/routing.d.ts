import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Routing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
     *
     * Calculates a set of locations that can be reached from the origin point.
    **/
    getRoutingVersionNumberCalculateReachableRangeOriginContentType(req: operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse>;
    /**
     * getRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
     *
     * Calculates a route between an origin and a destination.
    **/
    getRoutingVersionNumberCalculateRouteLocationsContentType(req: operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse>;
    /**
     * postRoutingVersionNumberCalculateReachableRangeOriginContentType - Reachable Range
     *
     * Calculates a set of locations that can be reached from the origin point. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
    **/
    postRoutingVersionNumberCalculateReachableRangeOriginContentType(req: operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse>;
    /**
     * postRoutingVersionNumberCalculateRouteLocationsContentType - Calculate Route
     *
     * Calculates a route between an origin and a destination. POST method handles additionally parameters: <em>supportingPoints</em>, <em>allowVignette</em>, <em>avoidVignette</em>, <em>avoidAreas</em>.
    **/
    postRoutingVersionNumberCalculateRouteLocationsContentType(req: operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest, config?: AxiosRequestConfig): Promise<operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse>;
}
