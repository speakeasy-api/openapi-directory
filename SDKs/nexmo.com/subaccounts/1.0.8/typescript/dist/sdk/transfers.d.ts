import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * This section shows how you execute credit, balance and number transfers, as well as viewing past transactions.
 */
export declare class Transfers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve list of balance transfers
     *
     * @remarks
     * Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.
     *
     */
    retrieveBalanceTransfers(req: operations.RetrieveBalanceTransfersRequest, security: operations.RetrieveBalanceTransfersSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveBalanceTransfersResponse>;
    /**
     * Retrieve list of credit transfers
     *
     * @remarks
     * Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.
     *
     */
    retrieveCreditTransfers(req: operations.RetrieveCreditTransfersRequest, security: operations.RetrieveCreditTransfersSecurity, config?: AxiosRequestConfig): Promise<operations.RetrieveCreditTransfersResponse>;
    /**
     * Transfer balance
     *
     * @remarks
     * Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.
     *
     */
    transferBalance(req: operations.TransferBalanceRequest, security: operations.TransferBalanceSecurity, config?: AxiosRequestConfig): Promise<operations.TransferBalanceResponse>;
    /**
     * Transfer credit
     *
     * @remarks
     * Transfer credit limit between a primary account and one of its subaccounts.
     *
     */
    transferCredit(req: operations.TransferCreditRequest, security: operations.TransferCreditSecurity, config?: AxiosRequestConfig): Promise<operations.TransferCreditResponse>;
    /**
     * Transfer number
     *
     * @remarks
     * Transfer number from one account to another.
     *
     */
    transferNumber(req: operations.TransferNumberRequest, security: operations.TransferNumberSecurity, config?: AxiosRequestConfig): Promise<operations.TransferNumberResponse>;
}
