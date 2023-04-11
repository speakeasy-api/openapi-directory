import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentDetails {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get Payment Details
     */
    getDomesticPaymentsDomesticPaymentIdPaymentDetails(req: operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsRequest, security: operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticPaymentsDomesticPaymentIdPaymentDetailsResponse>;
    /**
     * Get Payment Details
     */
    getDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetails(req: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsRequest, security: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIdPaymentDetailsResponse>;
    /**
     * Get Payment Details
     */
    getDomesticStandingOrdersDomesticStandingOrderIdPaymentDetails(req: operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsRequest, security: operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetDomesticStandingOrdersDomesticStandingOrderIdPaymentDetailsResponse>;
    /**
     * Get Payment Details
     */
    getFilePaymentsFilePaymentIdPaymentDetails(req: operations.GetFilePaymentsFilePaymentIdPaymentDetailsRequest, security: operations.GetFilePaymentsFilePaymentIdPaymentDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentsFilePaymentIdPaymentDetailsResponse>;
    /**
     * Get Payment Details
     */
    getInternationalPaymentsInternationalPaymentIdPaymentDetails(req: operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsRequest, security: operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalPaymentsInternationalPaymentIdPaymentDetailsResponse>;
    /**
     * Get Payment Details
     */
    getInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetails(req: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsRequest, security: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIdPaymentDetailsResponse>;
    /**
     * Get Payment Details
     */
    getInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetails(req: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsRequest, security: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIdPaymentDetailsResponse>;
}
