import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DomesticScheduledPayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Domestic Scheduled Payment Consents
     */
    createDomesticScheduledPaymentConsentsJson(req: operations.CreateDomesticScheduledPaymentConsentsJsonRequest, security: operations.CreateDomesticScheduledPaymentConsentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticScheduledPaymentConsentsJsonResponse>;
    /**
     * Create Domestic Scheduled Payment Consents
     */
    createDomesticScheduledPaymentConsentsRaw(req: operations.CreateDomesticScheduledPaymentConsentsRawRequest, security: operations.CreateDomesticScheduledPaymentConsentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticScheduledPaymentConsentsRawResponse>;
    /**
     * Create Domestic Scheduled Payments
     */
    createDomesticScheduledPaymentsJson(req: operations.CreateDomesticScheduledPaymentsJsonRequest, security: operations.CreateDomesticScheduledPaymentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticScheduledPaymentsJsonResponse>;
    /**
     * Create Domestic Scheduled Payments
     */
    createDomesticScheduledPaymentsRaw(req: operations.CreateDomesticScheduledPaymentsRawRequest, security: operations.CreateDomesticScheduledPaymentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticScheduledPaymentsRawResponse>;
    /**
     * Get Domestic Scheduled Payment Consents
     */
    getDomesticScheduledPaymentConsentsConsentId(req: operations.GetDomesticScheduledPaymentConsentsConsentIdRequest, security: operations.GetDomesticScheduledPaymentConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticScheduledPaymentConsentsConsentIdResponse>;
    /**
     * Get Domestic Scheduled Payments
     */
    getDomesticScheduledPaymentsDomesticScheduledPaymentId(req: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdRequest, security: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdResponse>;
}
