import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Parties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Parties
     *
     * @remarks
     * Get Parties by Account ID
     */
    getAccountsAccountIdParties(req: operations.GetAccountsAccountIdPartiesRequest, security: operations.GetAccountsAccountIdPartiesSecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdPartiesResponse>;
    /**
     * Get Party
     *
     * @remarks
     * Get Party by Account ID
     */
    getAccountsAccountIdParty(req: operations.GetAccountsAccountIdPartyRequest, security: operations.GetAccountsAccountIdPartySecurity, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdPartyResponse>;
    /**
     * Get Party
     *
     * @remarks
     * Get Party
     */
    getParty(req: operations.GetPartyRequest, security: operations.GetPartySecurity, config?: AxiosRequestConfig): Promise<operations.GetPartyResponse>;
}
