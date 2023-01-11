import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Parties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccountsAccountIdParties - Get Parties
     *
     * Get Parties by Account ID
    **/
    getAccountsAccountIdParties(req: operations.GetAccountsAccountIdPartiesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdPartiesResponse>;
    /**
     * getAccountsAccountIdParty - Get Party
     *
     * Get Party by Account ID
    **/
    getAccountsAccountIdParty(req: operations.GetAccountsAccountIdPartyRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdPartyResponse>;
    /**
     * getParty - Get Party
     *
     * Get Party
    **/
    getParty(req: operations.GetPartyRequest, config?: AxiosRequestConfig): Promise<operations.GetPartyResponse>;
}
