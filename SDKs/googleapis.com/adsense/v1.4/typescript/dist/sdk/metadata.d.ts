import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Metadata {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the metadata for the dimensions available to this AdSense account.
     */
    adsenseMetadataDimensionsList(req: operations.AdsenseMetadataDimensionsListRequest, security: operations.AdsenseMetadataDimensionsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseMetadataDimensionsListResponse>;
    /**
     * List the metadata for the metrics available to this AdSense account.
     */
    adsenseMetadataMetricsList(req: operations.AdsenseMetadataMetricsListRequest, security: operations.AdsenseMetadataMetricsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsenseMetadataMetricsListResponse>;
}
