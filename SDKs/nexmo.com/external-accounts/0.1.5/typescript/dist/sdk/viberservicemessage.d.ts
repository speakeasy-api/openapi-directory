import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ViberServiceMessage {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVsmAccount - Retrieve a Viber Service Message account
    **/
    getVsmAccount(req: operations.GetVsmAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetVsmAccountResponse>;
}
