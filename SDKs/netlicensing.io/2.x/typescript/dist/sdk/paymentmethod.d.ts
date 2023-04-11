import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Payment Method operations
 *
 * @see {@link https://netlicensing.io/wiki/payment-method-services} - Payment Method Services
 */
export declare class PaymentMethod {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Payment Method
     *
     * @remarks
     * Return a Payment Method info by 'paymentMethodNumber'
     */
    getPaymentMethod(req: operations.GetPaymentMethodRequest, security: operations.GetPaymentMethodSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentMethodResponse>;
    /**
     * List Payment Methods
     *
     * @remarks
     * Return a list of all Payment Methods for the current Vendor
     */
    listPaymentMethods(config?: AxiosRequestConfig): Promise<operations.ListPaymentMethodsResponse>;
    /**
     * Update Payment Method
     *
     * @remarks
     * Sets the provided properties to a Payment Method. Return an updated Payment Method
     */
    updatePaymentMethod(req: operations.UpdatePaymentMethodRequest, security: operations.UpdatePaymentMethodSecurity, config?: AxiosRequestConfig): Promise<operations.UpdatePaymentMethodResponse>;
}
