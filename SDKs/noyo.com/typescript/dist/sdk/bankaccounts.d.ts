import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class BankAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Bank Account
     *
     * @remarks
     * Create a bank account. Only a single bank account is permitted for a particular group application. If a subsequent one is submitted, you will receive a 409 error.
     */
    createBankAccount(req: operations.CreateBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.CreateBankAccountResponse>;
    /**
     * Delete a Bank Account
     *
     * @remarks
     * Delete a Bank Account based on the ID provided. The version parameter must match the latest Bank Account version.
     */
    deleteBankAccount(req: operations.DeleteBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBankAccountResponse>;
    /**
     * Get All Bank Account
     *
     * @remarks
     * Returns the latest version of all bank accounts related to the application whose ID was provided.
     */
    getAllBankAccounts(req: operations.GetAllBankAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAllBankAccountsResponse>;
    /**
     * Get Bank Account
     *
     * @remarks
     * Returns the latest version of a single bank account based on the ID provided.
     */
    getBankAccount(req: operations.GetBankAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetBankAccountResponse>;
}
