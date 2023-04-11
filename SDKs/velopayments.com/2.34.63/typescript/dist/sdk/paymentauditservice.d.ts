import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Payment Audit Service APIs allow you to see the history of fundings, payouts, and payments to payees.
 */
export declare class PaymentAuditService {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Export Transactions
     *
     * @remarks
     * Download a CSV file containing payments in a date range. Uses Transfer-Encoding - chunked to stream to the client. Date range is inclusive of both the start and end dates.
     */
    exportTransactionsCsvv4(req: operations.ExportTransactionsCsvv4Request, config?: AxiosRequestConfig): Promise<operations.ExportTransactionsCsvv4Response>;
    /**
     * Get Fundings for Payor
     *
     * @remarks
     * <p>Get a list of Fundings for a payor.</p>
     *
     */
    getFundingsV4(req: operations.GetFundingsV4Request, config?: AxiosRequestConfig): Promise<operations.GetFundingsV4Response>;
    /**
     * Get Payment
     *
     * @remarks
     * Get the payment with the given id. This contains the payment history.
     *
     */
    getPaymentDetailsV4(req: operations.GetPaymentDetailsV4Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentDetailsV4Response>;
    /**
     * Get Payments for Payout
     *
     * @remarks
     * Get List of payments for Payout, allowing for RETURNED status
     *
     */
    getPaymentsForPayoutV4(req: operations.GetPaymentsForPayoutV4Request, config?: AxiosRequestConfig): Promise<operations.GetPaymentsForPayoutV4Response>;
    /**
     * Get Payout Statistics
     *
     * @remarks
     * <p>Get payout statistics for a payor.</p>
     *
     */
    getPayoutStatsV4(req: operations.GetPayoutStatsV4Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutStatsV4Response>;
    /**
     * Get Payouts for Payor
     *
     * @remarks
     * Get List of payouts for payor
     *
     */
    getPayoutsForPayorV4(req: operations.GetPayoutsForPayorV4Request, config?: AxiosRequestConfig): Promise<operations.GetPayoutsForPayorV4Response>;
    /**
     * List Payment Changes
     *
     * @remarks
     * Get a paginated response listing payment changes.
     */
    listPaymentChangesV4(req: operations.ListPaymentChangesV4Request, config?: AxiosRequestConfig): Promise<operations.ListPaymentChangesV4Response>;
    /**
     * Get List of Payments
     *
     * @remarks
     * Get payments for the given payor Id
     */
    listPaymentsAuditV4(req: operations.ListPaymentsAuditV4Request, config?: AxiosRequestConfig): Promise<operations.ListPaymentsAuditV4Response>;
}
