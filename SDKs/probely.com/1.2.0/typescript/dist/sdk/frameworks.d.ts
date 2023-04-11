import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * During the scans we run fingerprinters against the target and record the
 *
 * @remarks
 * result on the site and assets.
 * You can access our list of frameworks/software here.
 *
 */
export declare class Frameworks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List frameworks
     */
    getFrameworks(req: operations.GetFrameworksRequest, config?: AxiosRequestConfig): Promise<operations.GetFrameworksResponse>;
    /**
     * Retrieve framework
     */
    getFrameworksId(req: operations.GetFrameworksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFrameworksIdResponse>;
}
