import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Saved List Views
 */
export declare class SavedListViews {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a saved list view
     *
     * @remarks
     * Deletes a saved list view. This operation is not reversible without contacting support.
     * This operation can be called multiple times successfully.
     *
     */
    deleteV2SavedListViewsIdJson(req: operations.DeleteV2SavedListViewsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2SavedListViewsIdJsonResponse>;
    /**
     * List saved list views
     *
     * @remarks
     * Fetches multiple saved list view records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2SavedListViewsJson(req: operations.GetV2SavedListViewsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2SavedListViewsJsonResponse>;
    /**
     * Fetch a saved list view
     *
     * @remarks
     * Fetches a saved list view, by ID only.
     *
     */
    getV2SavedListViewsIdJson(req: operations.GetV2SavedListViewsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2SavedListViewsIdJsonResponse>;
    /**
     * Create a saved list view
     *
     * @remarks
     * Creates a saved list view.
     *
     */
    postV2SavedListViewsJson(req: operations.PostV2SavedListViewsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2SavedListViewsJsonResponse>;
    /**
     * Update a saved list view
     *
     * @remarks
     * Updates a saved list view.
     *
     */
    putV2SavedListViewsIdJson(req: operations.PutV2SavedListViewsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2SavedListViewsIdJsonResponse>;
}
