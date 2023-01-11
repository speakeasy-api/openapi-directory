import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EditSubaccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * subaccountEdit - Edit a subaccount
     *
     * Edit a subaccount
    **/
    subaccountEdit(req: operations.SubaccountEditRequest, config?: AxiosRequestConfig): Promise<operations.SubaccountEditResponse>;
}
