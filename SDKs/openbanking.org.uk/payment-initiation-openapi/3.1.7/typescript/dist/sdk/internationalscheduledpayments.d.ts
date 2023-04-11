import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InternationalScheduledPayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create International Scheduled Payment Consents
     */
    createInternationalScheduledPaymentConsentsJson(req: operations.CreateInternationalScheduledPaymentConsentsJsonRequest, security: operations.CreateInternationalScheduledPaymentConsentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalScheduledPaymentConsentsJsonResponse>;
    /**
     * Create International Scheduled Payment Consents
     */
    createInternationalScheduledPaymentConsentsRaw(req: operations.CreateInternationalScheduledPaymentConsentsRawRequest, security: operations.CreateInternationalScheduledPaymentConsentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalScheduledPaymentConsentsRawResponse>;
    /**
     * Create International Scheduled Payments
     */
    createInternationalScheduledPaymentsJson(req: operations.CreateInternationalScheduledPaymentsJsonRequest, security: operations.CreateInternationalScheduledPaymentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalScheduledPaymentsJsonResponse>;
    /**
     * Create International Scheduled Payments
     */
    createInternationalScheduledPaymentsRaw(req: operations.CreateInternationalScheduledPaymentsRawRequest, security: operations.CreateInternationalScheduledPaymentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalScheduledPaymentsRawResponse>;
    /**
     * Get International Scheduled Payment Consents
     */
    getInternationalScheduledPaymentConsentsConsentId(req: operations.GetInternationalScheduledPaymentConsentsConsentIdRequest, security: operations.GetInternationalScheduledPaymentConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalScheduledPaymentConsentsConsentIdResponse>;
    /**
     * Get International Scheduled Payment Consents Funds Confirmation
     */
    getInternationalScheduledPaymentConsentsConsentIdFundsConfirmation(req: operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationRequest, security: operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalScheduledPaymentConsentsConsentIdFundsConfirmationResponse>;
    /**
     * Get International Scheduled Payments
     */
    getInternationalScheduledPaymentsInternationalScheduledPaymentId(req: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdRequest, security: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdResponse>;
}
