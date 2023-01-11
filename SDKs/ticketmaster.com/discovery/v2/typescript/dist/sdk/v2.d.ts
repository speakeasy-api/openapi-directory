import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V2 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDiscoveryV2Suggest - Find Suggest
     *
     * Find search suggestions and filter your suggestions by location, source, etc.
    **/
    getDiscoveryV2Suggest(req: operations.GetDiscoveryV2SuggestRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoveryV2SuggestResponse>;
}
