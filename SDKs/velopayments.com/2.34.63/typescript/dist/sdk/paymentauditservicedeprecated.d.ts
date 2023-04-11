import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class PaymentAuditServiceDeprecated {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * V3 Export Transactions
     *
     * @remarks
     * Deprecated (use /v4/paymentaudit/transactions instead)
     */
    exportTransactionsCsvv3(req: operations.ExportTransactionsCsvv3Request, config?: AxiosRequestConfig): Promise<operations.ExportTransactionsCsvv3Response>;
    /**
     * V1 Get Fundings for Payor
     *
     * @remarks
     * Deprecated (use /v4/paymentaudit/fundings)
     */
    getFundingsV1(req: operations.GetFundingsV1Request, config?: AxiosRequestConfig): Promise<operations.GetFundingsV1Response>;
    /**
     * V3 Get Payment
     *
     * @remarks
     * Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)
     */
    getPaymentDetailsV3(req: operations.GetPaymentDetailsV3Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentDetailsV3Response>;
    /**
     * V3 Get Payments for Payout
     *
     * @remarks
     * Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)
     */
    getPaymentsForPayoutPAV3(req: operations.GetPaymentsForPayoutPav3Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentsForPayoutPav3Response>;
    /**
     * V1 Get Payout Statistics
     *
     * @remarks
     * Deprecated (Use /v4/paymentaudit/payoutStatistics)
     */
    getPayoutStatsV1(req: operations.GetPayoutStatsV1Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutStatsV1Response>;
    /**
     * V3 Get Payouts for Payor
     *
     * @remarks
     * Deprecated (use /v4/paymentaudit/payouts instead)
     */
    getPayoutsForPayorV3(req: operations.GetPayoutsForPayorV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutsForPayorV3Response>;
    /**
     * V1 List Payment Changes
     *
     * @remarks
     * Deprecated (use /v4/payments/deltas instead)
     */
    listPaymentChanges(req: operations.ListPaymentChangesRequest, config?: AxiosRequestConfig): Promise<operations.ListPaymentChangesResponse>;
    /**
     * V3 Get List of Payments
     *
     * @remarks
     * Deprecated (use /v4/paymentaudit/payments instead)
     */
    listPaymentsAuditV3(req: operations.ListPaymentsAuditV3Request, config?: AxiosRequestConfig): Promise<operations.ListPaymentsAuditV3Response>;
}
