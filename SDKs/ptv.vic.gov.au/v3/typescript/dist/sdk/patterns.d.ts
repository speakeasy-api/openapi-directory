import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Patterns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * View the stopping pattern for a specific trip/service run
     */
    patternsGetPatternByRun(req: operations.PatternsGetPatternByRunRequest, config?: AxiosRequestConfig): Promise<operations.PatternsGetPatternByRunResponse>;
}
