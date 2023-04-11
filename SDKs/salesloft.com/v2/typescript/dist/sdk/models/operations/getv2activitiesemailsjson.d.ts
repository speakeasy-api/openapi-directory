import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2ActivitiesEmailsJsonRequest extends SpeakeasyBase {
    /**
     * Filters emails by action_id. Multiple action ids can be applied
     */
    actionId?: number[];
    /**
     * Filters emails by whether they have bounced or not
     */
    bounced?: boolean;
    /**
     * Filters emails by cadence. Multiple cadence ids can be applied
     */
    cadenceId?: number[];
    /**
     * Filters emails by crm_activity_id. Multiple crm activty ids can be applied
     */
    crmActivityId?: number[];
    /**
     * Filters emails by recipient email address. Multiple emails can be applied.
     */
    emailAddresses?: string[];
    /**
     * IDs of emails to fetch. If a record can't be found, that record won't be returned and your request will be successful
     */
    ids?: number[];
    /**
     * Whether to include total_pages and total_count in the metadata. Defaults to false
     */
    includePagingCounts?: boolean;
    /**
     * Specifies whether the max limit of 10k records should be applied to pagination counts. Affects the total_count and total_pages data
     */
    limitPagingCounts?: boolean;
    /**
     * Filters emails by one-off only
     */
    oneOff?: boolean;
    /**
     * The current page to fetch results from. Defaults to 1
     */
    page?: number;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * Filters emails by person_id. Multiple person ids can be applied
     */
    personId?: number[];
    /**
     * Filters emails by personalization score
     */
    personalization?: string[];
    /**
     * Specify explicit scoped fields desired on the Email Resource.
     */
    scopedFields?: string[];
    /**
     * Equality filters that are applied to the sent_at field. A single filter can be used by itself or combined with other filters to create a range.
     *
     * @remarks
     *
     * ---CUSTOM---
     * {"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}
     *
     */
    sentAt?: string[];
    /**
     * Key to sort on, must be one of: updated_at, send_time. Defaults to updated_at
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
    /**
     * Filters emails by status. Multiple status can be applied, possible values are sent, sent_from_gmail, sent_from_external, pending, pending_reply_check, scheduled, sending, delivering, failed, cancelled, pending_through_gmail, pending_through_external
     */
    status?: string[];
    /**
     * Filters emails by step. Multiple step ids can be applied
     */
    stepId?: number[];
    /**
     * Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
     *
     * @remarks
     *
     * ---CUSTOM---
     * {"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}
     *
     */
    updatedAt?: string[];
    /**
     * Filters emails by user_id. Multiple User ids can be applied
     */
    userId?: number[];
}
export declare class GetV2ActivitiesEmailsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
