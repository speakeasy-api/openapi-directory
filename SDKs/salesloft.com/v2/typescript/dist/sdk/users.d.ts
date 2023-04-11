import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * User Management
 */
export declare class Users {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * List users
     *
     * @remarks
     * Non Admin: Lists only your user, or all on team depending on group visibility policy
     * Team Admin: Lists users associated with your team
     *
     */
    getV2UsersJson(req: operations.GetV2UsersJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2UsersJsonResponse>;
    /**
     * Fetch a user
     *
     * @remarks
     * Fetches a user, by ID only.
     *
     */
    getV2UsersIdJson(req: operations.GetV2UsersIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2UsersIdJsonResponse>;
}
