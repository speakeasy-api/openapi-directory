import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List the payments for this AdSense account.
     */
    adsensePaymentsList(req: operations.AdsensePaymentsListRequest, security: operations.AdsensePaymentsListSecurity, config?: AxiosRequestConfig): Promise<operations.AdsensePaymentsListResponse>;
}
