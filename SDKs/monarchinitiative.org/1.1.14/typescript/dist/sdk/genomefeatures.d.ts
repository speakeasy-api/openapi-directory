import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Operations to retrieve sequence features
 */
export declare class GenomeFeatures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns list of matches
     */
    getFeaturesWithinResource(req: operations.GetFeaturesWithinResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturesWithinResourceResponse>;
}
