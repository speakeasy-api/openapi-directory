import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Premium {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Access account premium transactions.
     */
    retrieveAccountTransactionsV2(req: operations.RetrieveAccountTransactionsV2Request, config?: AxiosRequestConfig): Promise<operations.RetrieveAccountTransactionsV2Response>;
}
