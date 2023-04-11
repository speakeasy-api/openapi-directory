import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Payments {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create payment
     */
    createPaymentForm(req: shared.PaymentWriteRequest2, config?: AxiosRequestConfig): Promise<operations.CreatePaymentFormResponse>;
    /**
     * Create payment
     */
    createPaymentJson(req: shared.PaymentWriteRequest, config?: AxiosRequestConfig): Promise<operations.CreatePaymentJsonResponse>;
    /**
     * Create payment
     */
    createPaymentMultipart(req: shared.PaymentWriteRequest2, config?: AxiosRequestConfig): Promise<operations.CreatePaymentMultipartResponse>;
    /**
     * Delete periodic payment
     */
    deletePeriodicPayment(req: operations.DeletePeriodicPaymentRequest, config?: AxiosRequestConfig): Promise<operations.DeletePeriodicPaymentResponse>;
    /**
     * List minimum required fields for institution
     */
    listMinimumRequiredFieldsForInstitution(req: operations.ListMinimumRequiredFieldsForInstitutionRequest, config?: AxiosRequestConfig): Promise<operations.ListMinimumRequiredFieldsForInstitutionResponse>;
    /**
     * Retrieve all payments belonging to the company
     */
    listPayments(req: operations.ListPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.ListPaymentsResponse>;
    /**
     * API endpoints related to creditor accounts.
     */
    paymentsCreditorsCreateForm(req: shared.CreditorAccountWriteRequest1, config?: AxiosRequestConfig): Promise<operations.PaymentsCreditorsCreateFormResponse>;
    /**
     * API endpoints related to creditor accounts.
     */
    paymentsCreditorsCreateJson(req: shared.CreditorAccountWriteRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsCreditorsCreateJsonResponse>;
    /**
     * API endpoints related to creditor accounts.
     */
    paymentsCreditorsCreateMultipart(req: shared.CreditorAccountWriteRequest1, config?: AxiosRequestConfig): Promise<operations.PaymentsCreditorsCreateMultipartResponse>;
    /**
     * API endpoints related to creditor accounts.
     */
    paymentsCreditorsDestroy(req: operations.PaymentsCreditorsDestroyRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsCreditorsDestroyResponse>;
    /**
     * API endpoints related to creditor accounts.
     */
    paymentsCreditorsList(req: operations.PaymentsCreditorsListRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsCreditorsListResponse>;
    /**
     * API endpoints related to creditor accounts.
     */
    paymentsCreditorsRetrieve(req: operations.PaymentsCreditorsRetrieveRequest, config?: AxiosRequestConfig): Promise<operations.PaymentsCreditorsRetrieveResponse>;
    /**
     * Retrieve all payment creditor accounts
     */
    retrieveAllPaymentCreditorAccounts(config?: AxiosRequestConfig): Promise<operations.RetrieveAllPaymentCreditorAccountsResponse>;
    /**
     * Retrieve payment
     */
    retrievePayment(req: operations.RetrievePaymentRequest, config?: AxiosRequestConfig): Promise<operations.RetrievePaymentResponse>;
}
