import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Quality {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Site DailyQuality
     */
    qualityGetDailyDataQualityForSite(req: operations.QualityGetDailyDataQualityForSiteRequest, config?: AxiosRequestConfig): Promise<operations.QualityGetDailyDataQualityForSiteResponse>;
    /**
     * Get Site OverallQuality
     */
    qualityGetOverallDataQualityForSites(req: operations.QualityGetOverallDataQualityForSitesRequest, config?: AxiosRequestConfig): Promise<operations.QualityGetOverallDataQualityForSitesResponse>;
}
