import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class InternationalPayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create International Payment Consents
     */
    createInternationalPaymentConsentsJson(req: operations.CreateInternationalPaymentConsentsJsonRequest, security: operations.CreateInternationalPaymentConsentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalPaymentConsentsJsonResponse>;
    /**
     * Create International Payment Consents
     */
    createInternationalPaymentConsentsRaw(req: operations.CreateInternationalPaymentConsentsRawRequest, security: operations.CreateInternationalPaymentConsentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalPaymentConsentsRawResponse>;
    /**
     * Create International Payments
     */
    createInternationalPaymentsJson(req: operations.CreateInternationalPaymentsJsonRequest, security: operations.CreateInternationalPaymentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalPaymentsJsonResponse>;
    /**
     * Create International Payments
     */
    createInternationalPaymentsRaw(req: operations.CreateInternationalPaymentsRawRequest, security: operations.CreateInternationalPaymentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateInternationalPaymentsRawResponse>;
    /**
     * Get International Payment Consents
     */
    getInternationalPaymentConsentsConsentId(req: operations.GetInternationalPaymentConsentsConsentIdRequest, security: operations.GetInternationalPaymentConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalPaymentConsentsConsentIdResponse>;
    /**
     * Get International Payment Consents Funds Confirmation
     */
    getInternationalPaymentConsentsConsentIdFundsConfirmation(req: operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationRequest, security: operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalPaymentConsentsConsentIdFundsConfirmationResponse>;
    /**
     * Get International Payments
     */
    getInternationalPaymentsInternationalPaymentId(req: operations.GetInternationalPaymentsInternationalPaymentIdRequest, security: operations.GetInternationalPaymentsInternationalPaymentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalPaymentsInternationalPaymentIdResponse>;
}
