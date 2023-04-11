import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class EmployeeBenefitSetup {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add/update employee's benefit setup
     *
     * @remarks
     * Sends new or updated employee benefit setup information directly to Web Pay.
     */
    updateOrAddEmployeeBenefitSetup(req: operations.UpdateOrAddEmployeeBenefitSetupRequest, security: operations.UpdateOrAddEmployeeBenefitSetupSecurity, config?: AxiosRequestConfig): Promise<operations.UpdateOrAddEmployeeBenefitSetupResponse>;
}
