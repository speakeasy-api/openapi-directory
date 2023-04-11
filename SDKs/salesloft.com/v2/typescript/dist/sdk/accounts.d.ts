import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Account Management
 */
export declare class Accounts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an account
     *
     * @remarks
     * Deletes an account. This operation is not reversible without contacting support.
     * This operation can be called multiple times successfully.
     *
     * Deleting an account will remove all connected people from that account.
     *
     */
    deleteV2AccountsIdJson(req: operations.DeleteV2AccountsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2AccountsIdJsonResponse>;
    /**
     * List accounts
     *
     * @remarks
     * Fetches multiple account records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2AccountsJson(req: operations.GetV2AccountsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2AccountsJsonResponse>;
    /**
     * Fetch an account
     *
     * @remarks
     * Fetches an account, by ID only.
     *
     */
    getV2AccountsIdJson(req: operations.GetV2AccountsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2AccountsIdJsonResponse>;
    /**
     * Create an account
     *
     * @remarks
     * Creates an account.
     *
     * "domain" must be unique on the current team.
     *
     */
    postV2AccountsJson(req: operations.PostV2AccountsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2AccountsJsonResponse>;
    /**
     * Update an existing Account
     *
     * @remarks
     * Updates an account.
     *
     * "domain" must be unique on the current team.
     *
     */
    putV2AccountsIdJson(req: operations.PutV2AccountsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2AccountsIdJsonResponse>;
}
