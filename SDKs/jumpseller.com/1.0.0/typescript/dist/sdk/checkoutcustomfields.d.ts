import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class CheckoutCustomFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an existing CheckoutCustomField.
     */
    deleteCheckoutCustomFieldsIdJson(req: operations.DeleteCheckoutCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCheckoutCustomFieldsIdJsonResponse>;
    /**
     * Retrieve all Checkout Custom Fields.
     */
    getCheckoutCustomFieldsJson(req: operations.GetCheckoutCustomFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckoutCustomFieldsJsonResponse>;
    /**
     * Retrieve a single CheckoutCustomField.
     */
    getCheckoutCustomFieldsIdJson(req: operations.GetCheckoutCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetCheckoutCustomFieldsIdJsonResponse>;
    /**
     * Create a new CheckoutCustomField.
     *
     * @remarks
     * Type values can be: input, selection, checkbox, date or text. Area values can be: contact, billing_shipping or other.
     */
    postCheckoutCustomFieldsJson(req: operations.PostCheckoutCustomFieldsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostCheckoutCustomFieldsJsonResponse>;
    /**
     * Update a CheckoutCustomField.
     */
    putCheckoutCustomFieldsIdJson(req: operations.PutCheckoutCustomFieldsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutCheckoutCustomFieldsIdJsonResponse>;
}
