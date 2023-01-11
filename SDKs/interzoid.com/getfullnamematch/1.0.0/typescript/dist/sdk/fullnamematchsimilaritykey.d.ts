import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FullNameMatchSimilarityKey {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getfullnamematch - Gets a similarity key for matching purposes for full name data
     *
     * Gets a similarity key for matching purposes for full name data, where first and last name are part of the same field.
    **/
    getfullnamematch(req: operations.GetfullnamematchRequest, config?: AxiosRequestConfig): Promise<operations.GetfullnamematchResponse>;
}
