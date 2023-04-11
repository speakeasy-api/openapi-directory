import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class WhatsApp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve a Whatsapp account
     */
    getWAAccount(req: operations.GetWAAccountRequest, security: operations.GetWAAccountSecurity, config?: AxiosRequestConfig): Promise<operations.GetWAAccountResponse>;
}
