import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Departures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * departuresGetForStop - View departures for all routes from a stop
    **/
    departuresGetForStop(req: operations.DeparturesGetForStopRequest, config?: AxiosRequestConfig): Promise<operations.DeparturesGetForStopResponse>;
    /**
     * departuresGetForStopAndRoute - View departures for a specific route from a stop
    **/
    departuresGetForStopAndRoute(req: operations.DeparturesGetForStopAndRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeparturesGetForStopAndRouteResponse>;
}
