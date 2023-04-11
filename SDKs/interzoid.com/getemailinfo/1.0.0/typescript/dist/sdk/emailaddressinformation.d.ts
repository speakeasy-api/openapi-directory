import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EmailAddressInformation {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Gets email validation information for an email address
     *
     * @remarks
     * Get email validation information and other demographics for an email address.
     */
    getemailinfo(req: operations.GetemailinfoRequest, config?: AxiosRequestConfig): Promise<operations.GetemailinfoResponse>;
}
