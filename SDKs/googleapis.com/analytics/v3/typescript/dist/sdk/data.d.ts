import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Data {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns Analytics data for a view (profile).
     */
    analyticsDataGaGet(req: operations.AnalyticsDataGaGetRequest, security: operations.AnalyticsDataGaGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsDataGaGetResponse>;
    /**
     * Returns Analytics Multi-Channel Funnels data for a view (profile).
     */
    analyticsDataMcfGet(req: operations.AnalyticsDataMcfGetRequest, security: operations.AnalyticsDataMcfGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsDataMcfGetResponse>;
    /**
     * Returns real time data for a view (profile).
     */
    analyticsDataRealtimeGet(req: operations.AnalyticsDataRealtimeGetRequest, security: operations.AnalyticsDataRealtimeGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsDataRealtimeGetResponse>;
}
