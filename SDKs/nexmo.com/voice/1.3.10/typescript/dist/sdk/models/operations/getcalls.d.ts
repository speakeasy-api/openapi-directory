import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCallsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
/**
 * Either ascending or  descending order.
 */
export declare enum GetCallsOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * Filter by call status
 */
export declare enum GetCallsStatusEnum {
    Started = "started",
    Ringing = "ringing",
    Answered = "answered",
    Machine = "machine",
    Completed = "completed",
    Busy = "busy",
    Cancelled = "cancelled",
    Failed = "failed",
    Rejected = "rejected",
    Timeout = "timeout",
    Unanswered = "unanswered"
}
export declare class GetCallsRequest extends SpeakeasyBase {
    /**
     * Return all the records associated with a specific conversation.
     */
    conversationUuid?: string;
    /**
     * Return the records that occurred before this point in time
     */
    dateEnd?: Date;
    /**
     * Return the records that occurred after this point in time
     */
    dateStart?: Date;
    /**
     * Either ascending or  descending order.
     */
    order?: GetCallsOrderEnum;
    /**
     * Return this amount of records in the response
     */
    pageSize?: number;
    /**
     * Return calls from this index in the response
     */
    recordIndex?: number;
    /**
     * Filter by call status
     */
    status?: GetCallsStatusEnum;
}
export declare class GetCallsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    getCallsResponse?: shared.GetCallsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
