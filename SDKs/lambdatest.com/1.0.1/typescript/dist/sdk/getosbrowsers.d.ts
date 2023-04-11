import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class GetOSBrowsers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch all available os-browser combinations.
     *
     * @remarks
     * Fetch all os browsers combinations available on lambdatest platform.
     */
    osBrowsers(req: operations.OsBrowsersRequest, security: operations.OsBrowsersSecurity, config?: AxiosRequestConfig): Promise<operations.OsBrowsersResponse>;
}
