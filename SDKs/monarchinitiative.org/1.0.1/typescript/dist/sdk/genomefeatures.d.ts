import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GenomeFeatures {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFeaturesWithinResource - Returns list of matches
    **/
    getFeaturesWithinResource(req: operations.GetFeaturesWithinResourceRequest, config?: AxiosRequestConfig): Promise<operations.GetFeaturesWithinResourceResponse>;
}
