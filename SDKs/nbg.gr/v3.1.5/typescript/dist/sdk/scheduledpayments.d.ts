import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ScheduledPayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Scheduled Payments
     *
     * @remarks
     * Get Scheduled Payments by Account ID
     */
    getAccountsAccountIdScheduledPayments(req: operations.GetAccountsAccountIdScheduledPaymentsRequest, security: operations.GetAccountsAccountIdScheduledPaymentsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdScheduledPaymentsResponse>;
}
