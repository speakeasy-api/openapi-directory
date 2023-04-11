import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stops {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * View facilities at a specific stop (Metro and V/Line stations only)
     */
    stopsStopDetails(req: operations.StopsStopDetailsRequest, config?: AxiosRequestConfig): Promise<operations.StopsStopDetailsResponse>;
    /**
     * View all stops near a specific location
     */
    stopsStopsByGeolocation(req: operations.StopsStopsByGeolocationRequest, config?: AxiosRequestConfig): Promise<operations.StopsStopsByGeolocationResponse>;
    /**
     * View all stops on a specific route
     */
    stopsStopsForRoute(req: operations.StopsStopsForRouteRequest, config?: AxiosRequestConfig): Promise<operations.StopsStopsForRouteResponse>;
}
