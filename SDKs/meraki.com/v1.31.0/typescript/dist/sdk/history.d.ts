import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class History {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Return historical records for analytic zones
     *
     * @remarks
     * Return historical records for analytic zones
     */
    getDeviceCameraAnalyticsZoneHistory(req: operations.GetDeviceCameraAnalyticsZoneHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZoneHistoryResponse>;
    /**
     * Return the alert history for this network
     *
     * @remarks
     * Return the alert history for this network
     */
    getNetworkAlertsHistory(req: operations.GetNetworkAlertsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkAlertsHistoryResponse>;
    /**
     * Return all reported readings from sensors in a given timespan, sorted by timestamp
     *
     * @remarks
     * Return all reported readings from sensors in a given timespan, sorted by timestamp
     */
    getOrganizationSensorReadingsHistory(req: operations.GetOrganizationSensorReadingsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationSensorReadingsHistoryResponse>;
}
