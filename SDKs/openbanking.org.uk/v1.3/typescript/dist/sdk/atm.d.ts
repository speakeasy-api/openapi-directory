import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Endpoint for getting ATM data
 */
export declare class Atm {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets a list of all `ATM` objects.
     */
    getAtms(req: operations.GetAtmsRequest, config?: AxiosRequestConfig): Promise<operations.GetAtmsResponse>;
    /**
     * Gets header information on the current set of `ATM` data
     */
    headAtms(req: operations.HeadAtmsRequest, config?: AxiosRequestConfig): Promise<operations.HeadAtmsResponse>;
}
