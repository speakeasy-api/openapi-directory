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
     * GetBankAccount
     *
     * @remarks
     * Returns details of a [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount)
     * linked to a Square account.
     */
    getBankAccount(req: operations.GetBankAccountRequest, security: operations.GetBankAccountSecurity, config?: AxiosRequestConfig): Promise<operations.GetBankAccountResponse>;
    /**
     * GetBankAccountByV1Id
     *
     * @remarks
     * Returns details of a [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount) identified by V1 bank account ID.
     */
    getBankAccountByV1Id(req: operations.GetBankAccountByV1IdRequest, security: operations.GetBankAccountByV1IdSecurity, config?: AxiosRequestConfig): Promise<operations.GetBankAccountByV1IdResponse>;
    /**
     * ListBankAccounts
     *
     * @remarks
     * Returns a list of [BankAccount](https://developer.squareup.com/reference/square_2021-08-18/objects/BankAccount) objects linked to a Square account.
     */
    listBankAccounts(req: operations.ListBankAccountsRequest, security: operations.ListBankAccountsSecurity, config?: AxiosRequestConfig): Promise<operations.ListBankAccountsResponse>;
}
