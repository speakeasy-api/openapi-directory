import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Returns engagement and spend statistics in this application for the currently authenticated user.
     */
    gamesStatsGet(req: operations.GamesStatsGetRequest, security: operations.GamesStatsGetSecurity, config?: AxiosRequestConfig): Promise<operations.GamesStatsGetResponse>;
}
