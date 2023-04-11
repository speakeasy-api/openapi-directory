import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2MeetingsJsonRequest extends SpeakeasyBase {
    /**
     * Filters meetings by account_id. Multiple account ids can be applied
     */
    accountId?: string;
    /**
     * Filters meetings by event IDs
     */
    eventIds?: number[];
    /**
     * Filters meetings by UIDs provided by calendar provider
     */
    iCalUids?: string[];
    /**
     * IDs of meetings to fetch. If a record can't be found, that record won't be returned and your request will be successful
     */
    ids?: number[];
    /**
     * Flag to indicate whether to include owned_by_meetings_settings and booked_by_meetings_settings objects
     */
    includeMeetingsSettings?: boolean;
    /**
     * Whether to include total_pages and total_count in the metadata. Defaults to false
     */
    includePagingCounts?: boolean;
    /**
     * Specifies whether the max limit of 10k records should be applied to pagination counts. Affects the total_count and total_pages data
     */
    limitPagingCounts?: boolean;
    /**
     * The current page to fetch results from. Defaults to 1
     */
    page?: number;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * Filters meetings by person_id. Multiple person ids can be applied
     */
    personId?: string;
    /**
     * Filters meetings by person_id. Multiple person ids can be applied
     */
    personIds?: number[];
    /**
     * Whether to include deleted events in the result
     */
    showDeleted?: boolean;
    /**
     * Key to sort on, must be one of: start_time, created_at, updated_at. Defaults to start_time
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
    /**
     * Equality filters that are applied to the start_time field. A single filter can be used by itself or combined with other filters to create a range.
     *
     * @remarks
     *
     * ---CUSTOM---
     * {"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}
     *
     */
    startTime?: string[];
    /**
     * Filters meetings by status. Possible values are: pending, booked, failed, retry
     */
    status?: string;
    /**
     * Filters meetings by task_id. Multiple task ids can be applied
     */
    taskIds?: number[];
    /**
     * Filters meetings by user_guid. Multiple user guids can be applied
     */
    userGuids?: string[];
}
export declare class GetV2MeetingsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
