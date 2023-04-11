import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class DomesticPayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create Domestic Payment Consents
     */
    createDomesticPaymentConsentsJson(req: operations.CreateDomesticPaymentConsentsJsonRequest, security: operations.CreateDomesticPaymentConsentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticPaymentConsentsJsonResponse>;
    /**
     * Create Domestic Payment Consents
     */
    createDomesticPaymentConsentsRaw(req: operations.CreateDomesticPaymentConsentsRawRequest, security: operations.CreateDomesticPaymentConsentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticPaymentConsentsRawResponse>;
    /**
     * Create Domestic Payments
     */
    createDomesticPaymentsJson(req: operations.CreateDomesticPaymentsJsonRequest, security: operations.CreateDomesticPaymentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticPaymentsJsonResponse>;
    /**
     * Create Domestic Payments
     */
    createDomesticPaymentsRaw(req: operations.CreateDomesticPaymentsRawRequest, security: operations.CreateDomesticPaymentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateDomesticPaymentsRawResponse>;
    /**
     * Get Domestic Payment Consents
     */
    getDomesticPaymentConsentsConsentId(req: operations.GetDomesticPaymentConsentsConsentIdRequest, security: operations.GetDomesticPaymentConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticPaymentConsentsConsentIdResponse>;
    /**
     * Get Domestic Payment Consents Funds Confirmation
     */
    getDomesticPaymentConsentsConsentIdFundsConfirmation(req: operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationRequest, security: operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticPaymentConsentsConsentIdFundsConfirmationResponse>;
    /**
     * Get Domestic Payments
     */
    getDomesticPaymentsDomesticPaymentId(req: operations.GetDomesticPaymentsDomesticPaymentIdRequest, security: operations.GetDomesticPaymentsDomesticPaymentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticPaymentsDomesticPaymentIdResponse>;
}
