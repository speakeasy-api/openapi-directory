import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Payment Status
 */
export declare enum GetPaymentsForPayoutPav3StatusEnum {
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
export declare class GetPaymentsForPayoutPav3Request extends SpeakeasyBase {
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    /**
     * The payment amount from range filter. Filters for paymentAmount >= paymentAmountFrom
     */
    paymentAmountFrom?: number;
    /**
     * The payment amount to range filter. Filters for paymentAmount ⇐ paymentAmountTo
     */
    paymentAmountTo?: number;
    /**
     * The id (UUID) of the payout.
     */
    payoutId: string;
    /**
     * The remote id of the payees.
     */
    remoteId?: string;
    /**
     * Optional. If omitted or set to false, any Personal Identifiable Information (PII) values are returned masked.
     *
     * @remarks
     * If set to true, and you have permission, the PII values will be returned as their original unmasked values.
     *
     */
    sensitive?: boolean;
    /**
     * <p>List of sort fields (e.g. ?sort=submittedDateTime:asc,status:asc). Default is sort by remoteId</p>
     *
     * @remarks
     * <p>The supported sort fields are: sourceAmount, sourceCurrency, paymentAmount, paymentCurrency,
     * routingNumber, accountNumber, remoteId, submittedDateTime and status</p>
     *
     */
    sort?: string;
    /**
     * The source amount from range filter. Filters for sourceAmount >= sourceAmountFrom
     */
    sourceAmountFrom?: number;
    /**
     * The source amount to range filter. Filters for sourceAmount ⇐ sourceAmountTo
     */
    sourceAmountTo?: number;
    /**
     * Payment Status
     */
    status?: GetPaymentsForPayoutPav3StatusEnum;
    /**
     * The submitted date from range filter. Format is yyyy-MM-dd.
     */
    submittedDateFrom?: Date;
    /**
     * The submitted date to range filter. Format is yyyy-MM-dd.
     */
    submittedDateTo?: Date;
}
export declare class GetPaymentsForPayoutPav3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * 200 response, data found okay
     */
    getPaymentsForPayoutResponseV3?: shared.GetPaymentsForPayoutResponseV3;
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
    /**
     * The resource was not found or is no longer available
     *
     * @remarks
     *
     */
    inlineResponse404?: shared.InlineResponse404;
}
