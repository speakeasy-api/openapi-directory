import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AreaCodeInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getareacode - Gets telephone area code information
     *
     * Gets telephone area code information for a given area code.
    **/
    getareacode(req: operations.GetareacodeRequest, config?: AxiosRequestConfig): Promise<operations.GetareacodeResponse>;
}
