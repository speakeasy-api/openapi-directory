import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class GlobalPhoneNumberInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getglobalnumberinfo - Get demographic information for a global telephone number
     *
     * Get demographic information for a global telephone number, including city and country information, primary languages spoken, and mobile device identification.
    **/
    getglobalnumberinfo(req: operations.GetglobalnumberinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetglobalnumberinfoResponse>;
}
