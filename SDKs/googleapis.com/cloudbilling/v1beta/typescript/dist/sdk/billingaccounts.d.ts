import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BillingAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Use custom pricing in the estimate, using a `CostScenario` with a defined `billingAccount`.
     */
    cloudbillingBillingAccountsEstimateCostScenario(req: operations.CloudbillingBillingAccountsEstimateCostScenarioRequest, security: operations.CloudbillingBillingAccountsEstimateCostScenarioSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbillingBillingAccountsEstimateCostScenarioResponse>;
}
