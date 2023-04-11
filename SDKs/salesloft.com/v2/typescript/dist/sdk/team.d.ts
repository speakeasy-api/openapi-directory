import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Team Information
 */
export declare class Team {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch current team
     *
     * @remarks
     * Fetches the team of the authenticated user.
     *
     */
    getV2TeamJson(config?: AxiosRequestConfig): Promise<operations.GetV2TeamJsonResponse>;
}
