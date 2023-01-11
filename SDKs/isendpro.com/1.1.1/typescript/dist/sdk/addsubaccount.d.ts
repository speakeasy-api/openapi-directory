import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AddSubaccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * subaccountAdd - Ajoute un sous compte
     *
     * Ajoute un sous compte
    **/
    subaccountAdd(req: operations.SubaccountAddRequest, config?: AxiosRequestConfig): Promise<operations.SubaccountAddResponse>;
}
