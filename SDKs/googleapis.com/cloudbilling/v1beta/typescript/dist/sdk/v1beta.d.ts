import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class V1beta {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Estimate list prices using a `CostScenario` without a defined `billingAccount`.
     */
    cloudbillingEstimateCostScenario(req: operations.CloudbillingEstimateCostScenarioRequest, security: operations.CloudbillingEstimateCostScenarioSecurity, config?: AxiosRequestConfig): Promise<operations.CloudbillingEstimateCostScenarioResponse>;
}
