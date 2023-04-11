import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 *
 * @see {@link https://www.sms77.io/en/docs/gateway/http-api/analytics} - Retrieve analytics
 */
export declare class Analytics {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    analytics(req: operations.AnalyticsRequest, config?: AxiosRequestConfig): Promise<operations.AnalyticsResponse>;
}
