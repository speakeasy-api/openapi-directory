import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Statements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccountsAccountIdStatements - Get Statements
     *
     * Get Statements by Account ID
    **/
    getAccountsAccountIdStatements(req: operations.GetAccountsAccountIdStatementsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsResponse>;
    /**
     * getAccountsAccountIdStatementsStatementId - Get Statements
     *
     * Get Statements by Account ID and Statement ID
    **/
    getAccountsAccountIdStatementsStatementId(req: operations.GetAccountsAccountIdStatementsStatementIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdResponse>;
    /**
     * getAccountsAccountIdStatementsStatementIdFile - Get Statements
     *
     * Get Statement PDF File by Account ID and Statement ID
    **/
    getAccountsAccountIdStatementsStatementIdFile(req: operations.GetAccountsAccountIdStatementsStatementIdFileRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdFileResponse>;
}
