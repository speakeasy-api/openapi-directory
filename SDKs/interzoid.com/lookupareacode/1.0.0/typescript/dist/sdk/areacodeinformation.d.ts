import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AreaCodeInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets telephone area code information
     *
     * @remarks
     * Gets telephone area code information for a given area code.
     */
    getareacode(req: operations.GetareacodeRequest, config?: AxiosRequestConfig): Promise<operations.GetareacodeResponse>;
}
