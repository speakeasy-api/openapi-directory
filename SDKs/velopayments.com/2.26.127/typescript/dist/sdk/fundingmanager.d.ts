import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FundingManager {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createAchFundingRequest - Create Funding Request
     *
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo.
    **/
    createAchFundingRequest(req: operations.CreateAchFundingRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreateAchFundingRequestResponse>;
    /**
     * createFundingRequest - Create Funding Request
     *
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).
    **/
    createFundingRequest(req: operations.CreateFundingRequestRequest, config?: AxiosRequestConfig): Promise<operations.CreateFundingRequestResponse>;
    /**
     * createFundingRequestV3 - Create Funding Request
     *
     * Instruct a funding request to transfer funds from the payor’s funding bank to the payor’s balance held within Velo  (202 - accepted, 400 - invalid request body, 404 - source account not found).
    **/
    createFundingRequestV3(req: operations.CreateFundingRequestV3Request, config?: AxiosRequestConfig): Promise<operations.CreateFundingRequestV3Response>;
    /**
     * getFundingAccount - Get Funding Account
     *
     * Get Funding Account by ID
    **/
    getFundingAccount(req: operations.GetFundingAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountResponse>;
    /**
     * getFundingAccountV2 - Get Funding Account
     *
     * Get Funding Account by ID
    **/
    getFundingAccountV2(req: operations.GetFundingAccountV2Request, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountV2Response>;
    /**
     * getFundingAccounts - Get Funding Accounts
     *
     * Get the funding accounts.
    **/
    getFundingAccounts(req: operations.GetFundingAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountsResponse>;
    /**
     * getFundingAccountsV2 - Get Funding Accounts
     *
     * Get the funding accounts.
    **/
    getFundingAccountsV2(req: operations.GetFundingAccountsV2Request, config?: AxiosRequestConfig): Promise<operations.GetFundingAccountsV2Response>;
    /**
     * getSourceAccount - Get details about given source account.
     *
     * Get details about given source account.
    **/
    getSourceAccount(req: operations.GetSourceAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountResponse>;
    /**
     * getSourceAccountV2 - Get details about given source account.
     *
     * Get details about given source account.
    **/
    getSourceAccountV2(req: operations.GetSourceAccountV2Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountV2Response>;
    /**
     * getSourceAccountV3 - Get details about given source account.
     *
     * Get details about given source account.
    **/
    getSourceAccountV3(req: operations.GetSourceAccountV3Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountV3Response>;
    /**
     * getSourceAccounts - Get list of source accounts
     *
     * List source accounts.
    **/
    getSourceAccounts(req: operations.GetSourceAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountsResponse>;
    /**
     * getSourceAccountsV2 - Get list of source accounts
     *
     * List source accounts.
    **/
    getSourceAccountsV2(req: operations.GetSourceAccountsV2Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountsV2Response>;
    /**
     * getSourceAccountsV3 - Get list of source accounts
     *
     * List source accounts.
    **/
    getSourceAccountsV3(req: operations.GetSourceAccountsV3Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountsV3Response>;
    /**
     * listFundingAuditDeltas - Get Funding Audit Delta
     *
     * Get funding audit deltas for a payor
    **/
    listFundingAuditDeltas(req: operations.ListFundingAuditDeltasRequest, config?: AxiosRequestConfig): Promise<operations.ListFundingAuditDeltasResponse>;
    /**
     * setNotificationsRequest - Set notifications
     *
     * Set notifications for a given source account
    **/
    setNotificationsRequest(req: operations.SetNotificationsRequestRequest, config?: AxiosRequestConfig): Promise<operations.SetNotificationsRequestResponse>;
    /**
     * transferFunds - Transfer Funds between source accounts
     *
     * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
    **/
    transferFunds(req: operations.TransferFundsRequest, config?: AxiosRequestConfig): Promise<operations.TransferFundsResponse>;
    /**
     * transferFundsV3 - Transfer Funds between source accounts
     *
     * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
    **/
    transferFundsV3(req: operations.TransferFundsV3Request, config?: AxiosRequestConfig): Promise<operations.TransferFundsV3Response>;
}
