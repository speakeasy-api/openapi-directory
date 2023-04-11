import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Directions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * View all routes for a direction of travel
     */
    directionsForDirection(req: operations.DirectionsForDirectionRequest, config?: AxiosRequestConfig): Promise<operations.DirectionsForDirectionResponse>;
    /**
     * View all routes of a particular type for a direction of travel
     */
    directionsForDirectionAndType(req: operations.DirectionsForDirectionAndTypeRequest, config?: AxiosRequestConfig): Promise<operations.DirectionsForDirectionAndTypeResponse>;
    /**
     * View directions that a route travels in
     */
    directionsForRoute(req: operations.DirectionsForRouteRequest, config?: AxiosRequestConfig): Promise<operations.DirectionsForRouteResponse>;
}
