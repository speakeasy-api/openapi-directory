import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class AddSubaccount {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Ajoute un sous compte
     *
     * @remarks
     * Ajoute un sous compte
     */
    subaccountAdd(req: shared.SubaccountAddRequest, config?: AxiosRequestConfig): Promise<operations.SubaccountAddResponse>;
}
