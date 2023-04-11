import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * User Information
 */
export declare class Me {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Fetch current user
     *
     * @remarks
     * Authenticated user information. This endpoint does not accept any parameters as it is
     * represents your authenticated user. The "Users" resource provides user information
     * for other users on the team.
     *
     */
    getV2MeJson(config?: AxiosRequestConfig): Promise<operations.GetV2MeJsonResponse>;
}
