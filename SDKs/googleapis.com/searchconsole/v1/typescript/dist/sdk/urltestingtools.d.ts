import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class UrlTestingTools {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Runs Mobile-Friendly Test for a given URL.
     */
    searchconsoleUrlTestingToolsMobileFriendlyTestRun(req: operations.SearchconsoleUrlTestingToolsMobileFriendlyTestRunRequest, config?: AxiosRequestConfig): Promise<operations.SearchconsoleUrlTestingToolsMobileFriendlyTestRunResponse>;
}
