import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Runs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * View all trip/service runs for a specific route ID
     */
    runsForRoute(req: operations.RunsForRouteRequest, config?: AxiosRequestConfig): Promise<operations.RunsForRouteResponse>;
    /**
     * View all trip/service runs for a specific route ID and route type
     */
    runsForRouteAndRouteType(req: operations.RunsForRouteAndRouteTypeRequest, config?: AxiosRequestConfig): Promise<operations.RunsForRouteAndRouteTypeResponse>;
    /**
     * View all trip/service runs for a specific run_ref
     */
    runsForRun(req: operations.RunsForRunRequest, config?: AxiosRequestConfig): Promise<operations.RunsForRunResponse>;
    /**
     * View the trip/service run for a specific run_ref and route type
     */
    runsForRunAndRouteType(req: operations.RunsForRunAndRouteTypeRequest, config?: AxiosRequestConfig): Promise<operations.RunsForRunAndRouteTypeResponse>;
}
