import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Patterns {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * patternsGetPatternByRun - View the stopping pattern for a specific trip/service run
    **/
    patternsGetPatternByRun(req: operations.PatternsGetPatternByRunRequest, config?: AxiosRequestConfig): Promise<operations.PatternsGetPatternByRunResponse>;
}
