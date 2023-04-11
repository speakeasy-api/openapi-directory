import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an existing CustomField.
     */
    deleteCustomFieldsIdJson(req: operations.DeleteCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomFieldsIdJsonResponse>;
    /**
     * Delete an existing CustomFieldSelectOption.
     */
    deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson(req: operations.DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse>;
    /**
     * Retrieve all Store's Custom Fields.
     */
    getCustomFieldsJson(req: operations.GetCustomFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsJsonResponse>;
    /**
     * Retrieve a single CustomField.
     */
    getCustomFieldsIdJson(req: operations.GetCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsIdJsonResponse>;
    /**
     * Create a new Custom Field.
     */
    postCustomFieldsJson(req: operations.PostCustomFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomFieldsJsonResponse>;
    /**
     * Update a CustomField.
     */
    putCustomFieldsIdJson(req: operations.PutCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomFieldsIdJsonResponse>;
}
