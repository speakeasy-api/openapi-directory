import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ClientInitialAccess {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    deleteRealmClientsInitialAccessId(req: operations.DeleteRealmClientsInitialAccessIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRealmClientsInitialAccessIdResponse>;
    getRealmClientsInitialAccess(req: operations.GetRealmClientsInitialAccessRequest, config?: AxiosRequestConfig): Promise<operations.GetRealmClientsInitialAccessResponse>;
    /**
     * Create a new initial access token.
     */
    postRealmClientsInitialAccess(req: operations.PostRealmClientsInitialAccessRequest, config?: AxiosRequestConfig): Promise<operations.PostRealmClientsInitialAccessResponse>;
}
