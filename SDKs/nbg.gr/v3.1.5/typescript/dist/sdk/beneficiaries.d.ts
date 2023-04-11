import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Beneficiaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Beneficiaries
     *
     * @remarks
     * Get Beneficiaries by Account ID
     */
    getAccountsAccountIdBeneficiaries(req: operations.GetAccountsAccountIdBeneficiariesRequest, security: operations.GetAccountsAccountIdBeneficiariesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdBeneficiariesResponse>;
}
