import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GetOsBrowsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * osBrowsers - Fetch all available os-browser combinations.
     *
     * Fetch all os browsers combinations available on lambdatest platform.
    **/
    osBrowsers(req: operations.OsBrowsersRequest, config?: AxiosRequestConfig): Promise<operations.OsBrowsersResponse>;
}
