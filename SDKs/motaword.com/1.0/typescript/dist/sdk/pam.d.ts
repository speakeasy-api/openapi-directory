import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pam {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getClientProfileForPam - Get the Pam profile of a client for this client ID
     *
     * Get the Pam  profile of a client for this client ID
    **/
    getClientProfileForPam(req: operations.GetClientProfileForPamRequest, config?: AxiosRequestConfig): Promise<operations.GetClientProfileForPamResponse>;
}
