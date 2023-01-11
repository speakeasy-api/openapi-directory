import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Insurance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addFundsToInsurance - Add Funds To Insurance
     *
     * You may need to auto fund your account from time to time. For example, if you don't normally ship items over $100,
     * and may want to add funds to insurance rather than keeping the account funded.
     *
    **/
    addFundsToInsurance(req: operations.AddFundsToInsuranceRequest, config?: AxiosRequestConfig): Promise<operations.AddFundsToInsuranceResponse>;
    /**
     * connectInsurer - Connect a Shipsurance Account
     *
     * Connect a Shipsurance Account
    **/
    connectInsurer(req: operations.ConnectInsurerRequest, config?: AxiosRequestConfig): Promise<operations.ConnectInsurerResponse>;
    /**
     * disconnectInsurer - Disconnect a Shipsurance Account
     *
     * Disconnect a Shipsurance Account
    **/
    disconnectInsurer(config?: AxiosRequestConfig): Promise<operations.DisconnectInsurerResponse>;
    /**
     * getInsuranceBalance - Get Insurance Funds Balance
     *
     * Retrieve the balance of your Shipsurance account.
    **/
    getInsuranceBalance(config?: AxiosRequestConfig): Promise<operations.GetInsuranceBalanceResponse>;
}
