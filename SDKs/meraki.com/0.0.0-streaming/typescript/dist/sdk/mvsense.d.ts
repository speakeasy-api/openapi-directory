import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class MVSense {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns live state from camera of analytics zones
     *
     * @remarks
     * Returns live state from camera of analytics zones
     */
    getDeviceCameraAnalyticsLive(req: operations.GetDeviceCameraAnalyticsLiveRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsLiveResponse>;
    /**
     * Returns an overview of aggregate analytics data for a timespan
     *
     * @remarks
     * Returns an overview of aggregate analytics data for a timespan
     */
    getDeviceCameraAnalyticsOverview(req: operations.GetDeviceCameraAnalyticsOverviewRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsOverviewResponse>;
    /**
     * Returns most recent record for analytics zones
     *
     * @remarks
     * Returns most recent record for analytics zones
     */
    getDeviceCameraAnalyticsRecent(req: operations.GetDeviceCameraAnalyticsRecentRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsRecentResponse>;
    /**
     * Return historical records for analytic zones
     *
     * @remarks
     * Return historical records for analytic zones
     */
    getDeviceCameraAnalyticsZoneHistory(req: operations.GetDeviceCameraAnalyticsZoneHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZoneHistoryResponse>;
    /**
     * Returns all configured analytic zones for this camera
     *
     * @remarks
     * Returns all configured analytic zones for this camera
     */
    getDeviceCameraAnalyticsZones(req: operations.GetDeviceCameraAnalyticsZonesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceCameraAnalyticsZonesResponse>;
}
