import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Revisions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Checks whether the games client is out of date.
     */
    gamesRevisionsCheck(req: operations.GamesRevisionsCheckRequest, security: operations.GamesRevisionsCheckSecurity, config?: AxiosRequestConfig): Promise<operations.GamesRevisionsCheckResponse>;
}
