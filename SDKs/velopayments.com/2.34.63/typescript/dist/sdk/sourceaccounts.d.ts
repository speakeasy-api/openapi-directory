import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * <p>Source Accounts are where funds are drawn from for making payouts</p>
 *
 * @remarks
 *
 */
export declare class SourceAccounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Source Account
     *
     * @remarks
     * Get details about given source account.
     */
    getSourceAccountV2(req: operations.GetSourceAccountV2Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountV2Response>;
    /**
     * Get details about given source account.
     *
     * @remarks
     * Get details about given source account.
     */
    getSourceAccountV3(req: operations.GetSourceAccountV3Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountV3Response>;
    /**
     * Get list of source accounts
     *
     * @remarks
     * List source accounts.
     */
    getSourceAccountsV2(req: operations.GetSourceAccountsV2Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountsV2Response>;
    /**
     * Get list of source accounts
     *
     * @remarks
     * List source accounts.
     */
    getSourceAccountsV3(req: operations.GetSourceAccountsV3Request, config?: AxiosRequestConfig): Promise<operations.GetSourceAccountsV3Response>;
    /**
     * Set notifications
     *
     * @remarks
     * <p>Set notifications for a given source account</p>
     * <p>deprecated since 2.34 (use v3 version)</p>
     *
     */
    setNotificationsRequest(req: operations.SetNotificationsRequestRequest, config?: AxiosRequestConfig): Promise<operations.SetNotificationsRequestResponse>;
    /**
     * Set notifications
     *
     * @remarks
     * <p>Set notifications for a given source account</p>
     * <p>If the balance falls below the amount set in the request an email notification will be sent to the email address registered in the payor profile</p>
     *
     */
    setNotificationsRequestV3(req: operations.SetNotificationsRequestV3Request, config?: AxiosRequestConfig): Promise<operations.SetNotificationsRequestV3Response>;
    /**
     * Transfer Funds between source accounts
     *
     * @remarks
     * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
     */
    transferFundsV2(req: operations.TransferFundsV2Request, config?: AxiosRequestConfig): Promise<operations.TransferFundsV2Response>;
    /**
     * Transfer Funds between source accounts
     *
     * @remarks
     * Transfer funds between source accounts for a Payor. The 'from' source account is identified in the URL, and is the account which will be debited. The 'to' (destination) source account is in the body, and is the account which will be credited. Both source accounts must belong to the same Payor. There must be sufficient balance in the 'from' source account, otherwise the transfer attempt will fail.
     */
    transferFundsV3(req: operations.TransferFundsV3Request, config?: AxiosRequestConfig): Promise<operations.TransferFundsV3Response>;
}
