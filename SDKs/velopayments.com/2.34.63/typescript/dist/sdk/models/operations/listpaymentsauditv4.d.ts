import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The status of the post instruct FX step if one was required for the payment
 */
export declare enum ListPaymentsAuditV4PostInstructFxStatusEnum {
    Any = "ANY",
    Initiated = "INITIATED",
    Cancelled = "CANCELLED",
    Executed = "EXECUTED",
    Completed = "COMPLETED",
    Returned = "RETURNED",
    Resubmitted = "RESUBMITTED",
    Refunded = "REFUNDED"
}
/**
 * Payout Schedule Status
 */
export declare enum ListPaymentsAuditV4ScheduleStatusEnum {
    Any = "ANY",
    Scheduled = "SCHEDULED",
    Executed = "EXECUTED",
    Failed = "FAILED"
}
/**
 * Payment Status
 */
export declare enum ListPaymentsAuditV4StatusEnum {
    Accepted = "ACCEPTED",
    AwaitingFunds = "AWAITING_FUNDS",
    Funded = "FUNDED",
    Unfunded = "UNFUNDED",
    BankPaymentRequested = "BANK_PAYMENT_REQUESTED",
    Rejected = "REJECTED",
    AcceptedByRails = "ACCEPTED_BY_RAILS",
    Confirmed = "CONFIRMED",
    Failed = "FAILED",
    Returned = "RETURNED",
    Withdrawn = "WITHDRAWN"
}
/**
 * Transmission Type
 *
 * @remarks
 * * ACH
 * * SAME_DAY_ACH
 * * WIRE
 * * GACHO
 *
 */
export declare enum ListPaymentsAuditV4TransmissionTypeEnum {
    Ach = "ACH",
    SameDayAch = "SAME_DAY_ACH",
    Wire = "WIRE",
    Local = "LOCAL",
    Gacho = "GACHO"
}
export declare class ListPaymentsAuditV4Request extends SpeakeasyBase {
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    /**
     * The UUID of the payee.
     */
    payeeId?: string;
    /**
     * The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
     */
    paymentAmountFrom?: number;
    /**
     * The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
     */
    paymentAmountTo?: number;
    /**
     * The payment currency filter. Filters based on an exact match on the currency.
     */
    paymentCurrency?: string;
    /**
     * The payment memo filter. This filters via a case insensitive substring match.
     */
    paymentMemo?: string;
    /**
     * The account owner Payor Id. Required for external users.
     */
    payorId?: string;
    /**
     * The payor’s name. This filters via a case insensitive substring match.
     */
    payorName?: string;
    /**
     * The status of the post instruct FX step if one was required for the payment
     */
    postInstructFxStatus?: ListPaymentsAuditV4PostInstructFxStatusEnum;
    /**
     * Payout Rails ID filter - case insensitive match.
     *
     * @remarks
     * Any value is allowed, but you should use one of the supported railsId values.
     * To get this list of values, you should call the 'Get Supported Rails' endpoint.
     *
     */
    railsId?: string;
    /**
     * The remote id of the payees.
     */
    remoteId?: string;
    /**
     * The id of the remote system that is orchestrating payments
     */
    remoteSystemId?: string;
    /**
     * Payout Schedule Status
     */
    scheduleStatus?: ListPaymentsAuditV4ScheduleStatusEnum;
    /**
     * Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.
     */
    scheduledForDateFrom?: Date;
    /**
     * Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.
     */
    scheduledForDateTo?: Date;
    /**
     * Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
     *
     * @remarks
     * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
     *
     */
    sensitive?: boolean;
    /**
     * List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by submittedDateTime:desc,paymentId:asc
     *
     * @remarks
     * The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,
     * routingNumber, accountNumber, remoteId, submittedDateTime, status and paymentId
     *
     */
    sort?: string;
    /**
     * The source account name filter. This filters via a case insensitive substring match.
     */
    sourceAccountName?: string;
    /**
     * The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
     */
    sourceAmountFrom?: number;
    /**
     * The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
     */
    sourceAmountTo?: number;
    /**
     * The source currency filter. Filters based on an exact match on the currency.
     */
    sourceCurrency?: string;
    /**
     * Payment Status
     */
    status?: ListPaymentsAuditV4StatusEnum;
    /**
     * The submitted date from range filter. Format is yyyy-MM-dd.
     */
    submittedDateFrom?: Date;
    /**
     * The submitted date to range filter. Format is yyyy-MM-dd.
     */
    submittedDateTo?: Date;
    /**
     * Transmission Type
     *
     * @remarks
     * * ACH
     * * SAME_DAY_ACH
     * * WIRE
     * * GACHO
     *
     */
    transmissionType?: ListPaymentsAuditV4TransmissionTypeEnum;
}
export declare class ListPaymentsAuditV4Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Paginated list of payments
     */
    listPaymentsResponseV4?: shared.ListPaymentsResponseV4;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request. See Error message payload for details of failure
     */
    inlineResponse400?: shared.InlineResponse400;
    /**
     * Invalid access token. May be expired or invalid
     */
    inlineResponse401?: shared.InlineResponse401;
    /**
     * The authentication does not have permissions to access the resource
     *
     * @remarks
     * This usually occurs when there is a valid authentication instance (client or user) but they do not have the required permissions
     *
     */
    inlineResponse403?: shared.InlineResponse403;
}
