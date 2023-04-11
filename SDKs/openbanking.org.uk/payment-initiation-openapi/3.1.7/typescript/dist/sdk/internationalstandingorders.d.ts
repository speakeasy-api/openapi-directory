import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InternationalStandingOrders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create International Standing Order Consents
     */
    createInternationalStandingOrderConsentsJson(req: operations.CreateInternationalStandingOrderConsentsJsonRequest, security: operations.CreateInternationalStandingOrderConsentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalStandingOrderConsentsJsonResponse>;
    /**
     * Create International Standing Order Consents
     */
    createInternationalStandingOrderConsentsRaw(req: operations.CreateInternationalStandingOrderConsentsRawRequest, security: operations.CreateInternationalStandingOrderConsentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalStandingOrderConsentsRawResponse>;
    /**
     * Create International Standing Orders
     */
    createInternationalStandingOrdersJson(req: operations.CreateInternationalStandingOrdersJsonRequest, security: operations.CreateInternationalStandingOrdersJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalStandingOrdersJsonResponse>;
    /**
     * Create International Standing Orders
     */
    createInternationalStandingOrdersRaw(req: operations.CreateInternationalStandingOrdersRawRequest, security: operations.CreateInternationalStandingOrdersRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalStandingOrdersRawResponse>;
    /**
     * Get International Standing Order Consents
     */
    getInternationalStandingOrderConsentsConsentId(req: operations.GetInternationalStandingOrderConsentsConsentIdRequest, security: operations.GetInternationalStandingOrderConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalStandingOrderConsentsConsentIdResponse>;
    /**
     * Get International Standing Orders
     */
    getInternationalStandingOrdersInternationalStandingOrderPaymentId(req: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdRequest, security: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdResponse>;
}
