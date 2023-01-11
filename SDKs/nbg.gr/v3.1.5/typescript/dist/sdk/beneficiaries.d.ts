import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Beneficiaries {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccountsAccountIdBeneficiaries - Get Beneficiaries
     *
     * Get Beneficiaries by Account ID
    **/
    getAccountsAccountIdBeneficiaries(req: operations.GetAccountsAccountIdBeneficiariesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdBeneficiariesResponse>;
}
