import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Read-only route providing information about how the requesting client is authenticated on the API, as well as corresponding permissions.
 *
 * @remarks
 *
 */
export declare class Authinfo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Authentication information
     */
    getAuthinfo(config?: AxiosRequestConfig): Promise<operations.GetAuthinfoResponse>;
}
