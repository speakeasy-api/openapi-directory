import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * insurance
 *
 * @remarks
 *
 */
export declare class Insurance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Add Funds To Insurance
     *
     * @remarks
     * You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100,
     * and may want to add funds to insurance rather than keeping the account funded.
     *
     */
    addFundsToInsurance(req: shared.AddFundsToInsuranceRequestBody, config?: AxiosRequestConfig): Promise<operations.AddFundsToInsuranceResponse>;
    /**
     * Connect a Shipsurance Account
     *
     * @remarks
     * Connect a Shipsurance Account
     */
    connectInsurer(req: shared.ConnectInsurerRequestBody, config?: AxiosRequestConfig): Promise<operations.ConnectInsurerResponse>;
    /**
     * Disconnect a Shipsurance Account
     *
     * @remarks
     * Disconnect a Shipsurance Account
     */
    disconnectInsurer(config?: AxiosRequestConfig): Promise<operations.DisconnectInsurerResponse>;
    /**
     * Get Insurance Funds Balance
     *
     * @remarks
     * Retrieve the balance of your Shipsurance account.
     */
    getInsuranceBalance(config?: AxiosRequestConfig): Promise<operations.GetInsuranceBalanceResponse>;
}
