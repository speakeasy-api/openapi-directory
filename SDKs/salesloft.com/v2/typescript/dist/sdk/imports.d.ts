import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Import Management
 */
export declare class Imports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an import
     *
     * @remarks
     * Deletes an import, by ID only. The associated people can be deleted as part of the deletion process.
     *
     * Admin users can access imports for the entire team, but non-admin users can only access their own imports.
     *
     */
    deleteV2ImportsIdJson(req: operations.DeleteV2ImportsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2ImportsIdJsonResponse>;
    /**
     * List imports
     *
     * @remarks
     * Fetches multiple imports.
     *
     */
    getV2ImportsJson(req: operations.GetV2ImportsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ImportsJsonResponse>;
    /**
     * Fetch an import
     *
     * @remarks
     * Fetches an import, by ID only.
     *
     * Admin users can access imports for the entire team, but non-admin users can only access their own imports.
     *
     */
    getV2ImportsIdJson(req: operations.GetV2ImportsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2ImportsIdJsonResponse>;
    /**
     * Create an import
     *
     * @remarks
     * Creates an import.
     *
     */
    postV2ImportsJson(req: operations.PostV2ImportsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2ImportsJsonResponse>;
    /**
     * Update an import
     *
     * @remarks
     * Updates an import, by ID only.
     *
     * Admin users can access imports for the entire team, but non-admin users can only access their own imports.
     *
     */
    putV2ImportsIdJson(req: operations.PutV2ImportsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2ImportsIdJsonResponse>;
}
