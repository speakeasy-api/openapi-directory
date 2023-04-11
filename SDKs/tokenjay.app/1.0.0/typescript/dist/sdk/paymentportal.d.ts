import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * ErgoPay payment portal
 */
export declare class PaymentPortal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Creates a new payment request. Will return request id to check for transaction state and ergopay url to show the user as QR code
     */
    addPaymentRequest(req: shared.CreatePaymentRequest, config?: AxiosRequestConfig): Promise<operations.AddPaymentRequestResponse>;
    /**
     * Returns the state of a payment request. Please note that payment requests are purged after some time, so persist the state at your side when needed
     */
    getPaymentState(req: operations.GetPaymentStateRequest, config?: AxiosRequestConfig): Promise<operations.GetPaymentStateResponse>;
}
