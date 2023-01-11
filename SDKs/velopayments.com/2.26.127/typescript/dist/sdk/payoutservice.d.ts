import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PayoutService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createQuoteForPayoutV3 - Create a quote for the payout
     *
     * Create quote for a payout
    **/
    createQuoteForPayoutV3(req: operations.CreateQuoteForPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.CreateQuoteForPayoutV3Response>;
    /**
     * getPaymentsForPayoutV3 - Retrieve payments for a payout
     *
     * Retrieve payments for a payout
    **/
    getPaymentsForPayoutV3(req: operations.GetPaymentsForPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentsForPayoutV3Response>;
    /**
     * getPayoutSummaryV3 - Get Payout Summary
     *
     * Get payout summary - returns the current state of the payout.
    **/
    getPayoutSummaryV3(req: operations.GetPayoutSummaryV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutSummaryV3Response>;
    /**
     * instructPayoutV3 - Instruct Payout
     *
     * Instruct a payout to be made for the specified payoutId.
    **/
    instructPayoutV3(req: operations.InstructPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.InstructPayoutV3Response>;
    /**
     * submitPayoutV3 - Submit Payout
     *
     * <p>Create a new payout and return a location header with a link to get the payout.</p>
     * <p>Basic validation of the payout is performed before returning but more comprehensive validation is done asynchronously.</p>
     * <p>The results can be obtained by issuing a HTTP GET to the URL returned in the location header.</p>
     * <p>**NOTE:** amount values in payments must be in 'minor units' format. E.g. cents for USD, pence for GBP etc.</p>
     *  with no decimal places.
     *
    **/
    submitPayoutV3(req: operations.SubmitPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.SubmitPayoutV3Response>;
    /**
     * withdrawPayment - Withdraw a Payment
     *
     * <p>withdraw a payment </p>
     * <p>There are a variety of reasons why this can fail</p>
     * <ul>
     *     <li>the payment must be in a state of 'accepted' or 'unfunded'</li>
     *     <li>the payout must not be in a state of 'instructed'</li>
     * </ul>
     *
    **/
    withdrawPayment(req: operations.WithdrawPaymentRequest, config?: AxiosRequestConfig): Promise<operations.WithdrawPaymentResponse>;
    /**
     * withdrawPayoutV3 - Withdraw Payout
     *
     * Withdraw Payout will delete payout details from payout service and rails services but will just move the status of the payout to WITHDRAWN in payment audit.
    **/
    withdrawPayoutV3(req: operations.WithdrawPayoutV3Request, config?: AxiosRequestConfig): Promise<operations.WithdrawPayoutV3Response>;
}
