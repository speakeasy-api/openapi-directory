import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class StandingOrders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Standing Orders
     *
     * @remarks
     * Get Standing Orders by Account ID
     */
    getAccountsAccountIdStandingOrders(req: operations.GetAccountsAccountIdStandingOrdersRequest, security: operations.GetAccountsAccountIdStandingOrdersSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStandingOrdersResponse>;
}
