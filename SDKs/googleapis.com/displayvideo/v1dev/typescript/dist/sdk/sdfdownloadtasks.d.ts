import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Sdfdownloadtasks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets the latest state of an asynchronous SDF download task operation. Clients should poll this method at intervals of 30 seconds.
     */
    displayvideoSdfdownloadtasksOperationsGet(req: operations.DisplayvideoSdfdownloadtasksOperationsGetRequest, security: operations.DisplayvideoSdfdownloadtasksOperationsGetSecurity, config?: AxiosRequestConfig): Promise<operations.DisplayvideoSdfdownloadtasksOperationsGetResponse>;
}
