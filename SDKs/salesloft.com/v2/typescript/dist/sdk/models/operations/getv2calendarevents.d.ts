import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2CalendarEventsRequest extends SpeakeasyBase {
    /**
     * Upper bound (exclusive) for a calendar event's start time to filter by.
     *
     * @remarks
     * Must be in ISO 8601 format.
     *
     * Example: `2022-02-14T10:12:59+00:00`.
     *
     */
    endTime?: string;
    /**
     * Whether to include total_pages and total_count in the metadata. Defaults to false
     */
    includePagingCounts?: boolean;
    /**
     * The current page to fetch results from. Defaults to 1
     */
    page?: number;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * Key to sort on, must be one of: start_time. Defaults to start_time
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
    /**
     * Lower bound (inclusive) for a calendar event's end time to filter by.
     *
     * @remarks
     * Must be in ISO 8601 format.
     *
     * Example: `2022-02-14T10:12:59+00:00`.
     *
     */
    startTime?: string;
    /**
     * user_guid of the user who created or included as a guest to the event.
     *
     * @remarks
     *
     */
    userGuid?: string;
}
export declare class GetV2CalendarEventsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
