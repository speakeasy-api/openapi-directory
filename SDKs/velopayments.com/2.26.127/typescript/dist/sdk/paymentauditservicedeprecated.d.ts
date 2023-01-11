import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class PaymentAuditServiceDeprecated {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * exportTransactionsCsvv3 - V3 Export Transactions
     *
     * Deprecated (use /v4/paymentaudit/transactions instead)
    **/
    exportTransactionsCsvv3(req: operations.ExportTransactionsCsvv3Request, config?: AxiosRequestConfig): Promise<operations.ExportTransactionsCsvv3Response>;
    /**
     * getFundingsV1 - V1 Get Fundings for Payor
     *
     * Deprecated (use /v4/paymentaudit/fundings)
    **/
    getFundingsV1(req: operations.GetFundingsV1Request, config?: AxiosRequestConfig): Promise<operations.GetFundingsV1Response>;
    /**
     * getPaymentDetailsV3 - V3 Get Payment
     *
     * Deprecated (use /v4/paymentaudit/payments/<paymentId> instead)
    **/
    getPaymentDetailsV3(req: operations.GetPaymentDetailsV3Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentDetailsV3Response>;
    /**
     * getPaymentsForPayoutPaV3 - V3 Get Payments for Payout
     *
     * Deprecated (use /v4/paymentaudit/payouts/<payoutId> instead)
    **/
    getPaymentsForPayoutPaV3(req: operations.GetPaymentsForPayoutPaV3Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentsForPayoutPaV3Response>;
    /**
     * getPayoutStatsV1 - V1 Get Payout Statistics
     *
     * Deprecated (Use /v4/paymentaudit/payoutStatistics)
    **/
    getPayoutStatsV1(req: operations.GetPayoutStatsV1Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutStatsV1Response>;
    /**
     * getPayoutsForPayorV3 - V3 Get Payouts for Payor
     *
     * Deprecated (use /v4/paymentaudit/payouts instead)
    **/
    getPayoutsForPayorV3(req: operations.GetPayoutsForPayorV3Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutsForPayorV3Response>;
    /**
     * listPaymentChanges - V1 List Payment Changes
     *
     * Deprecated (use /v4/payments/deltas instead)
    **/
    listPaymentChanges(req: operations.ListPaymentChangesRequest, config?: AxiosRequestConfig): Promise<operations.ListPaymentChangesResponse>;
    /**
     * listPaymentsAuditV3 - V3 Get List of Payments
     *
     * Deprecated (use /v4/paymentaudit/payments instead)
    **/
    listPaymentsAuditV3(req: operations.ListPaymentsAuditV3Request, config?: AxiosRequestConfig): Promise<operations.ListPaymentsAuditV3Response>;
}
