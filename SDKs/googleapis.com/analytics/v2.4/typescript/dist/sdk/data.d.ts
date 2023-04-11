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
     * Returns Analytics report data for a view (profile).
     */
    analyticsDataGet(req: operations.AnalyticsDataGetRequest, security: operations.AnalyticsDataGetSecurity, config?: AxiosRequestConfig): Promise<operations.AnalyticsDataGetResponse>;
}
