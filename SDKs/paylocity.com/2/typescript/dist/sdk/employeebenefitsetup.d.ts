import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class EmployeeBenefitSetup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * updateOrAddEmployeeBenefitSetup - Add/update employee's benefit setup
     *
     * Sends new or updated employee benefit setup information directly to Web Pay.
    **/
    updateOrAddEmployeeBenefitSetup(req: operations.UpdateOrAddEmployeeBenefitSetupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrAddEmployeeBenefitSetupResponse>;
}
