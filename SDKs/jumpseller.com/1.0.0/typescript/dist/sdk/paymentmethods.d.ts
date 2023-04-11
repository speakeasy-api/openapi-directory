import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentMethods {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieve all Store's Payment Methods.
     */
    getPaymentMethodsJson(req: operations.GetPaymentMethodsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodsJsonResponse>;
    /**
     * Retrieve a single Payment Method.
     */
    getPaymentMethodsIdJson(req: operations.GetPaymentMethodsIdJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodsIdJsonResponse>;
}
