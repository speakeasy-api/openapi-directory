import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class StandingOrders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccountsAccountIdStandingOrders - Get Standing Orders
     *
     * Get Standing Orders by Account ID
    **/
    getAccountsAccountIdStandingOrders(req: operations.GetAccountsAccountIdStandingOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStandingOrdersResponse>;
}
