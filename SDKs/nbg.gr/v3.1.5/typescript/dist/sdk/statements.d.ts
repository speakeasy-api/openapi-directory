import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Statements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Statements
     *
     * @remarks
     * Get Statements by Account ID
     */
    getAccountsAccountIdStatements(req: operations.GetAccountsAccountIdStatementsRequest, security: operations.GetAccountsAccountIdStatementsSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsResponse>;
    /**
     * Get Statements
     *
     * @remarks
     * Get Statements by Account ID and Statement ID
     */
    getAccountsAccountIdStatementsStatementId(req: operations.GetAccountsAccountIdStatementsStatementIdRequest, security: operations.GetAccountsAccountIdStatementsStatementIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdResponse>;
    /**
     * Get Statements
     *
     * @remarks
     * Get Statement PDF File by Account ID and Statement ID
     */
    getAccountsAccountIdStatementsStatementIdFile(req: operations.GetAccountsAccountIdStatementsStatementIdFileRequest, security: operations.GetAccountsAccountIdStatementsStatementIdFileSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdFileResponse>;
}
