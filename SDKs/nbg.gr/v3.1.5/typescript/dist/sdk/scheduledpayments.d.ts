import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ScheduledPayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccountsAccountIdScheduledPayments - Get Scheduled Payments
     *
     * Get Scheduled Payments by Account ID
    **/
    getAccountsAccountIdScheduledPayments(req: operations.GetAccountsAccountIdScheduledPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdScheduledPaymentsResponse>;
}
