import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * An external-account used as the `from` field in the Messages API and Dispatch API
 */
export declare class Account {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all accounts you own
     */
    getAllAccounts(req: operations.GetAllAccountsRequest, security: operations.GetAllAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllAccountsResponse>;
}
