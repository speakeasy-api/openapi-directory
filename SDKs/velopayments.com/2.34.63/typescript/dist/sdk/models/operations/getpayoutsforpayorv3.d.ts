import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Payout Status
 */
export declare enum GetPayoutsForPayorV3StatusEnum {
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
export declare class GetPayoutsForPayorV3Request extends SpeakeasyBase {
    /**
     * Page number. Default is 1.
     */
    page?: number;
    /**
     * The number of results to return in a page
     */
    pageSize?: number;
    /**
     * The account owner Payor ID
     */
    payorId: string;
    /**
     * Payout Memo filter - case insensitive sub-string match
     */
    payoutMemo?: string;
    /**
     * List of sort fields (e.g. ?sort=submittedDateTime:asc,instructedDateTime:asc,status:asc)
     *
     * @remarks
     * Default is submittedDateTime:asc
     * The supported sort fields are: submittedDateTime, instructedDateTime, status.
     *
     */
    sort?: string;
    /**
     * Payout Status
     */
    status?: GetPayoutsForPayorV3StatusEnum;
    /**
     * The submitted date from range filter. Format is yyyy-MM-dd.
     */
    submittedDateFrom?: Date;
    /**
     * The submitted date to range filter. Format is yyyy-MM-dd.
     */
    submittedDateTo?: Date;
}
export declare class GetPayoutsForPayorV3Response extends SpeakeasyBase {
    contentType: string;
    /**
     * Payor data found
     */
    getPayoutsResponseV3?: shared.GetPayoutsResponseV3;
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
