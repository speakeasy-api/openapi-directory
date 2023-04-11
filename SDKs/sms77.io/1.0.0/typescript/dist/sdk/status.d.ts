import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 *
 * @see {@link https://sms77.io/en/docs/gateway/http-api/status-reports} - Retrieve the status for a sent SMS with the given ID
 */
export declare class Status {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    status(req: operations.StatusRequest, config?: AxiosRequestConfig): Promise<operations.StatusResponse>;
}
