import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DirectDeposit {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get All Direct Deposit
     *
     * @remarks
     * Get All Direct Deposit returns main direct deposit and all additional direct depositsfor the selected employee.
     */
    getAllDirectDeposit(req: operations.GetAllDirectDepositRequest, security: operations.GetAllDirectDepositSecurity, config?: AxiosRequestConfig): Promise<operations.GetAllDirectDepositResponse>;
}
