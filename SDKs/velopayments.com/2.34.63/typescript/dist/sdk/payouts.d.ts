import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * <p>Payout APIs allow you to create and instruct payouts to payees</p>
 *
 * @remarks
 * <p>There are three phases to a payout:</p>
 * <ul>
 *     <li>Submit - the payments are created within the platform</li>
 *     <li>Quote - optional step if FX is involved</li>
 *     <li>Instruct - the payments are sent to the payment rails for processing</li>
 * </ul>
 * <p>Between 1 and 2000 payments can be created within the platform as part of a Payout</p>
 *
 */
export declare class Payouts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Create a quote for the payout
     *
     * @remarks
     * Create quote for a payout
     */
    createQuoteForPayoutV3(req: operations.CreateQuoteForPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.CreateQuoteForPayoutV3Response>;
    /**
     * Deschedule a payout
     *
     * @remarks
     * Remove the schedule for a scheduled payout
     */
    deschedulePayout(req: operations.DeschedulePayoutRequest, config?: AxiosRequestConfig): Promise<operations.DeschedulePayoutResponse>;
    /**
     * Retrieve payments for a payout
     *
     * @remarks
     * Retrieve payments for a payout
     */
    getPaymentsForPayoutV3(req: operations.GetPaymentsForPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentsForPayoutV3Response>;
    /**
     * Get Payout Summary
     *
     * @remarks
     * Get payout summary - returns the current state of the payout.
     */
    getPayoutSummaryV3(req: operations.GetPayoutSummaryV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutSummaryV3Response>;
    /**
     * Instruct Payout
     *
     * @remarks
     * Instruct a payout to be made for the specified payoutId.
     */
    instructPayoutV3(req: operations.InstructPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.InstructPayoutV3Response>;
    /**
     * Schedule a payout
     *
     * @remarks
     * <p>Schedule a payout for auto-instruction in the future
     * or update existing payout schedule if the payout has been scheduled before.</p>
     *
     */
    scheduleForPayout(req: operations.ScheduleForPayoutRequest, config?: AxiosRequestConfig): Promise<operations.ScheduleForPayoutResponse>;
    /**
     * Submit Payout
     *
     * @remarks
     * <p>Create a new payout and return a location header with a link to the payout</p>
     * <p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
     * <p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
     * <p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>
     *
     */
    submitPayoutV3Json(req: shared.CreatePayoutRequestV3, config?: AxiosRequestConfig): Promise<operations.SubmitPayoutV3JsonResponse>;
    /**
     * Submit Payout
     *
     * @remarks
     * <p>Create a new payout and return a location header with a link to the payout</p>
     * <p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously</p>
     * <p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header</p>
     * <p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc with no decimal places</p>
     *
     */
    submitPayoutV3Multipart(req: operations.SubmitPayoutV3MultipartFormData, config?: AxiosRequestConfig): Promise<operations.SubmitPayoutV3MultipartResponse>;
    /**
     * Withdraw a Payment
     *
     * @remarks
     * <p>withdraw a payment </p>
     * <p>There are a variety of reasons why this can fail</p>
     * <ul>
     *     <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
     *     <li>the payout must not be in a state of 'instructed'</li>
     * </ul>
     *
     */
    withdrawPayment(req: operations.WithdrawPaymentRequest, config?: AxiosRequestConfig): Promise<operations.WithdrawPaymentResponse>;
    /**
     * Withdraw Payout
     *
     * @remarks
     * Withdraw Payout will remove the payout details from the rails but the payout will still be accessible in payout service in WITHDRAWN status.
     */
    withdrawPayoutV3(req: operations.WithdrawPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.WithdrawPayoutV3Response>;
}
