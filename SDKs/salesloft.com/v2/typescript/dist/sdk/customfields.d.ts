import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Custom Field Management
 */
export declare class CustomFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete a custom field
     *
     * @remarks
     * Deletes a custom field.
     *
     */
    deleteV2CustomFieldsIdJson(req: operations.DeleteV2CustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteV2CustomFieldsIdJsonResponse>;
    /**
     * List custom fields
     *
     * @remarks
     * Fetches multiple custom field records. The records can be filtered, paged, and sorted according to
     * the respective parameters.
     *
     */
    getV2CustomFieldsJson(req: operations.GetV2CustomFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CustomFieldsJsonResponse>;
    /**
     * Fetch a custom field
     *
     * @remarks
     * Fetches a custom field, by ID only.
     *
     */
    getV2CustomFieldsIdJson(req: operations.GetV2CustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetV2CustomFieldsIdJsonResponse>;
    /**
     * Create a custom field
     *
     * @remarks
     * Creates a custom field.
     *
     */
    postV2CustomFieldsJson(req: operations.PostV2CustomFieldsJsonRequestBody, config?: AxiosRequestConfig): Promise<operations.PostV2CustomFieldsJsonResponse>;
    /**
     * Update a custom field
     *
     * @remarks
     * Update a custom field.
     *
     */
    putV2CustomFieldsIdJson(req: operations.PutV2CustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutV2CustomFieldsIdJsonResponse>;
}
