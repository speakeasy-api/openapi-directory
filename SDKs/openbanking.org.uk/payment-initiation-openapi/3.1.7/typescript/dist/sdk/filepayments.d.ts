import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class FilePayments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create File Payment Consents
     */
    createFilePaymentConsentsConsentIdFileJson(req: operations.CreateFilePaymentConsentsConsentIdFileJsonRequest, security: operations.CreateFilePaymentConsentsConsentIdFileJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFilePaymentConsentsConsentIdFileJsonResponse>;
    /**
     * Create File Payment Consents
     */
    createFilePaymentConsentsConsentIdFileRaw(req: operations.CreateFilePaymentConsentsConsentIdFileRawRequest, security: operations.CreateFilePaymentConsentsConsentIdFileRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFilePaymentConsentsConsentIdFileRawResponse>;
    /**
     * Create File Payment Consents
     */
    createFilePaymentConsentsJson(req: operations.CreateFilePaymentConsentsJsonRequest, security: operations.CreateFilePaymentConsentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFilePaymentConsentsJsonResponse>;
    /**
     * Create File Payment Consents
     */
    createFilePaymentConsentsRaw(req: operations.CreateFilePaymentConsentsRawRequest, security: operations.CreateFilePaymentConsentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFilePaymentConsentsRawResponse>;
    /**
     * Create File Payments
     */
    createFilePaymentsJson(req: operations.CreateFilePaymentsJsonRequest, security: operations.CreateFilePaymentsJsonSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFilePaymentsJsonResponse>;
    /**
     * Create File Payments
     */
    createFilePaymentsRaw(req: operations.CreateFilePaymentsRawRequest, security: operations.CreateFilePaymentsRawSecurity, config?: AxiosRequestConfig): Promise<operations.CreateFilePaymentsRawResponse>;
    /**
     * Get File Payment Consents
     */
    getFilePaymentConsentsConsentId(req: operations.GetFilePaymentConsentsConsentIdRequest, security: operations.GetFilePaymentConsentsConsentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentConsentsConsentIdResponse>;
    /**
     * Get File Payment Consents
     */
    getFilePaymentConsentsConsentIdFile(req: operations.GetFilePaymentConsentsConsentIdFileRequest, security: operations.GetFilePaymentConsentsConsentIdFileSecurity, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentConsentsConsentIdFileResponse>;
    /**
     * Get File Payments
     */
    getFilePaymentsFilePaymentId(req: operations.GetFilePaymentsFilePaymentIdRequest, security: operations.GetFilePaymentsFilePaymentIdSecurity, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentsFilePaymentIdResponse>;
    /**
     * Get File Payments
     */
    getFilePaymentsFilePaymentIdReportFile(req: operations.GetFilePaymentsFilePaymentIdReportFileRequest, security: operations.GetFilePaymentsFilePaymentIdReportFileSecurity, config?: AxiosRequestConfig): Promise<operations.GetFilePaymentsFilePaymentIdReportFileResponse>;
}
