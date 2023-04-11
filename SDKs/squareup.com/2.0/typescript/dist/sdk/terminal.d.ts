import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Terminal {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * CancelTerminalCheckout
     *
     * @remarks
     * Cancels a Terminal checkout request if the status of the request permits it.
     */
    cancelTerminalCheckout(req: operations.CancelTerminalCheckoutRequest, security: operations.CancelTerminalCheckoutSecurity, config?: AxiosRequestConfig): Promise<operations.CancelTerminalCheckoutResponse>;
    /**
     * CancelTerminalRefund
     *
     * @remarks
     * Cancels an Interac Terminal refund request by refund request ID if the status of the request permits it.
     */
    cancelTerminalRefund(req: operations.CancelTerminalRefundRequest, security: operations.CancelTerminalRefundSecurity, config?: AxiosRequestConfig): Promise<operations.CancelTerminalRefundResponse>;
    /**
     * CreateTerminalCheckout
     *
     * @remarks
     * Creates a Terminal checkout request and sends it to the specified device to take a payment
     * for the requested amount.
     */
    createTerminalCheckout(req: shared.CreateTerminalCheckoutRequest, security: operations.CreateTerminalCheckoutSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTerminalCheckoutResponse>;
    /**
     * CreateTerminalRefund
     *
     * @remarks
     * Creates a request to refund an Interac payment completed on a Square Terminal.
     */
    createTerminalRefund(req: shared.CreateTerminalRefundRequest, security: operations.CreateTerminalRefundSecurity, config?: AxiosRequestConfig): Promise<operations.CreateTerminalRefundResponse>;
    /**
     * GetTerminalCheckout
     *
     * @remarks
     * Retrieves a Terminal checkout request by `checkout_id`.
     */
    getTerminalCheckout(req: operations.GetTerminalCheckoutRequest, security: operations.GetTerminalCheckoutSecurity, config?: AxiosRequestConfig): Promise<operations.GetTerminalCheckoutResponse>;
    /**
     * GetTerminalRefund
     *
     * @remarks
     * Retrieves an Interac Terminal refund object by ID.
     */
    getTerminalRefund(req: operations.GetTerminalRefundRequest, security: operations.GetTerminalRefundSecurity, config?: AxiosRequestConfig): Promise<operations.GetTerminalRefundResponse>;
    /**
     * SearchTerminalCheckouts
     *
     * @remarks
     * Retrieves a filtered list of Terminal checkout requests created by the account making the request.
     */
    searchTerminalCheckouts(req: shared.SearchTerminalCheckoutsRequest, security: operations.SearchTerminalCheckoutsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchTerminalCheckoutsResponse>;
    /**
     * SearchTerminalRefunds
     *
     * @remarks
     * Retrieves a filtered list of Interac Terminal refund requests created by the seller making the request.
     */
    searchTerminalRefunds(req: shared.SearchTerminalRefundsRequest, security: operations.SearchTerminalRefundsSecurity, config?: AxiosRequestConfig): Promise<operations.SearchTerminalRefundsResponse>;
}
