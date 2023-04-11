import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CustomFieldSelectOptions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all Store's Custom Fields.
     */
    getCustomFieldsIdSelectOptionsJson(req: operations.GetCustomFieldsIdSelectOptionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsIdSelectOptionsJsonResponse>;
    /**
     * Retrieve a single SelectOption from a CustomField.
     */
    getCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson(req: operations.GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse>;
    /**
     * Create a new Custom Field Select Option.
     */
    postCustomFieldsIdSelectOptionsJson(req: operations.PostCustomFieldsIdSelectOptionsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCustomFieldsIdSelectOptionsJsonResponse>;
    /**
     * Update a SelectOption from a CustomField.
     */
    putCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson(req: operations.PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse>;
}
