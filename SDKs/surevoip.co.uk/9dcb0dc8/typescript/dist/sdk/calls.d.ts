import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Calls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getCalls - Validate a phone number by calling it once
    **/
    getCalls(req: operations.GetCallsRequest, config?: AxiosRequestConfig): Promise<operations.GetCallsResponse>;
    /**
     * postCalls - Create phone calls with or without announcements and scheduled hangups
    **/
    postCalls(req: operations.PostCallsRequest, config?: AxiosRequestConfig): Promise<operations.PostCallsResponse>;
}
