import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Reports generation
 */
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch a list of Events within the time period for the Devices or Groups
     *
     * @remarks
     * At least one _deviceId_ or one _groupId_ must be passed
     */
    getReportsEvents(req: operations.GetReportsEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsEventsResponse>;
    /**
     * Fetch a list of Positions within the time period for the Devices or Groups
     *
     * @remarks
     * At least one _deviceId_ or one _groupId_ must be passed
     */
    getReportsRoute(req: operations.GetReportsRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsRouteResponse>;
    /**
     * Fetch a list of ReportStops within the time period for the Devices or Groups
     *
     * @remarks
     * At least one _deviceId_ or one _groupId_ must be passed
     */
    getReportsStops(req: operations.GetReportsStopsRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsStopsResponse>;
    /**
     * Fetch a list of ReportSummary within the time period for the Devices or Groups
     *
     * @remarks
     * At least one _deviceId_ or one _groupId_ must be passed
     */
    getReportsSummary(req: operations.GetReportsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsSummaryResponse>;
    /**
     * Fetch a list of ReportTrips within the time period for the Devices or Groups
     *
     * @remarks
     * At least one _deviceId_ or one _groupId_ must be passed
     */
    getReportsTrips(req: operations.GetReportsTripsRequest, config?: AxiosRequestConfig): Promise<operations.GetReportsTripsResponse>;
}
