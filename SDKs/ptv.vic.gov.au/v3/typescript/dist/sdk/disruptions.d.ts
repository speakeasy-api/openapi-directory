import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Disruptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * View all disruptions for all route types
     */
    disruptionsGetAllDisruptions(req: operations.DisruptionsGetAllDisruptionsRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetAllDisruptionsResponse>;
    /**
     * View a specific disruption
     */
    disruptionsGetDisruptionById(req: operations.DisruptionsGetDisruptionByIdRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionByIdResponse>;
    /**
     * Get all disruption modes
     */
    disruptionsGetDisruptionModes(req: operations.DisruptionsGetDisruptionModesRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionModesResponse>;
    /**
     * View all disruptions for a particular route
     */
    disruptionsGetDisruptionsByRoute(req: operations.DisruptionsGetDisruptionsByRouteRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionsByRouteResponse>;
    /**
     * View all disruptions for a particular route and stop
     */
    disruptionsGetDisruptionsByRouteAndStop(req: operations.DisruptionsGetDisruptionsByRouteAndStopRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionsByRouteAndStopResponse>;
    /**
     * View all disruptions for a particular stop
     */
    disruptionsGetDisruptionsByStop(req: operations.DisruptionsGetDisruptionsByStopRequest, config?: AxiosRequestConfig): Promise<operations.DisruptionsGetDisruptionsByStopResponse>;
}
