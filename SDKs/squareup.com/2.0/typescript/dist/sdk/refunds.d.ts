import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Refunds {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * GetPaymentRefund
     *
     * @remarks
     * Retrieves a specific refund using the `refund_id`.
     */
    getPaymentRefund(req: operations.GetPaymentRefundRequest, security: operations.GetPaymentRefundSecurity, config?: AxiosRequestConfig): Promise<operations.GetPaymentRefundResponse>;
    /**
     * ListPaymentRefunds
     *
     * @remarks
     * Retrieves a list of refunds for the account making the request.
     *
     * Results are eventually consistent, and new refunds or changes to refunds might take several
     * seconds to appear.
     *
     * The maximum results per page is 100.
     */
    listPaymentRefunds(req: operations.ListPaymentRefundsRequest, security: operations.ListPaymentRefundsSecurity, config?: AxiosRequestConfig): Promise<operations.ListPaymentRefundsResponse>;
    /**
     * RefundPayment
     *
     * @remarks
     * Refunds a payment. You can refund the entire payment amount or a
     * portion of it. You can use this endpoint to refund a card payment or record a
     * refund of a cash or external payment. For more information, see
     * [Refund Payment](https://developer.squareup.com/docs/payments-api/refund-payments).
     */
    refundPayment(req: shared.RefundPaymentRequest, security: operations.RefundPaymentSecurity, config?: AxiosRequestConfig): Promise<operations.RefundPaymentResponse>;
}
