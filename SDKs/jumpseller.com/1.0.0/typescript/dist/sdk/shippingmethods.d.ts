import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class ShippingMethods {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Delete an existing Shipping Method.
     */
    deleteShippingMethodsIdJson(req: operations.DeleteShippingMethodsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.DeleteShippingMethodsIdJsonResponse>;
    /**
     * Retrieve all Store's Shipping Methods.
     */
    getShippingMethodsJson(req: operations.GetShippingMethodsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetShippingMethodsJsonResponse>;
    /**
     * Retrieve a single Shipping Method.
     */
    getShippingMethodsIdJson(req: operations.GetShippingMethodsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetShippingMethodsIdJsonResponse>;
    /**
     * Creates a Shipping Method.
     */
    postShippingMethodsJson(req: operations.PostShippingMethodsJsonRequest, config?: AxiosRequestConfig): Promise<operations.PostShippingMethodsJsonResponse>;
    /**
     * Update a Shipping Method.
     */
    putShippingMethodsIdJson(req: operations.PutShippingMethodsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutShippingMethodsIdJsonResponse>;
}
