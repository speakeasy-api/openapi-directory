import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CountryMatchSimilarityKey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getcountrymatch - Gets a similarity key for matching purposes for country name data
     *
     * Gets a similarity key to use for matching purposes for country name data
    **/
    getcountrymatch(req: operations.GetcountrymatchRequest, config?: AxiosRequestConfig): Promise<operations.GetcountrymatchResponse>;
}
