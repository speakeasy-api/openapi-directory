import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Frameworks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFrameworks - List frameworks
    **/
    getFrameworks(req: operations.GetFrameworksRequest, config?: AxiosRequestConfig): Promise<operations.GetFrameworksResponse>;
    /**
     * getFrameworksId - Retrieve framework
    **/
    getFrameworksId(req: operations.GetFrameworksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFrameworksIdResponse>;
}
