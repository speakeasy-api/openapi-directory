import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Pagespeedapi {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.
     */
    pagespeedonlinePagespeedapiRunpagespeed(req: operations.PagespeedonlinePagespeedapiRunpagespeedRequest, security: operations.PagespeedonlinePagespeedapiRunpagespeedSecurity, config?: AxiosRequestConfig): Promise<operations.PagespeedonlinePagespeedapiRunpagespeedResponse>;
}
