import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Payout Schedule Status
 */
export declare enum GetPayoutsForPayorV4ScheduleStatusEnum {
    Any = "ANY",
    Scheduled = "SCHEDULED",
    Executed = "EXECUTED",
    Failed = "FAILED"
}
/**
 * Payout Status
 */
export declare enum GetPayoutsForPayorV4StatusEnum {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Submitted = "SUBMITTED",
    Quoted = "QUOTED",
    Instructed = "INSTRUCTED",
    Completed = "COMPLETED",
    Incomplete = "INCOMPLETE",
    Confirmed = "CONFIRMED",
    Withdrawn = "WITHDRAWN"
}
export declare class GetPayoutsForPayorV4Request extends SpeakeasyBase {
    /**
     * The name of the payor whose payees are being paid. This filters via a case insensitive substring match.
     */
    fromPayorName?: string;
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    /**
     * The id (UUID) of the payor funding the payout or the payor whose payees are being paid.
     */
    payorId?: string;
    /**
     * Payout Memo filter - case insensitive sub-string match
     */
    payoutMemo?: string;
    /**
     * Payout Schedule Status
     */
    scheduleStatus?: GetPayoutsForPayorV4ScheduleStatusEnum;
    /**
     * Filter payouts scheduled to run on or after the given date. Format is yyyy-MM-dd.
     */
    scheduledForDateFrom?: Date;
    /**
     * Filter payouts scheduled to run on or before the given date. Format is yyyy-MM-dd.
     */
    scheduledForDateTo?: Date;
    /**
     * List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)
     *
     * @remarks
     * Default is submittedDateTime:asc
     * The supported sort fields are: submittedDateTime, instructedDateTime, status, totalPayments, payoutId, scheduledFor
     *
     */
    sort?: string;
    /**
     * Payout Status
     */
    status?: GetPayoutsForPayorV4StatusEnum;
    /**
     * The submitted date from range filter. Format is yyyy-MM-dd.
     */
    submittedDateFrom?: Date;
    /**
     * The submitted date to range filter. Format is yyyy-MM-dd.
     */
    submittedDateTo?: Date;
}
export declare class GetPayoutsForPayorV4Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Payor data found
     */
    getPayoutsResponse?: shared.GetPayoutsResponse;
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
