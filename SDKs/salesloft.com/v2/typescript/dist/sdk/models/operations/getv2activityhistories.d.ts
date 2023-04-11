import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2ActivityHistoriesRequest extends SpeakeasyBase {
    /**
     * For internal use only. This field does not comply with our backwards compatibility policies. This filter is for authenticated users of Salesloft only and will not work for OAuth Applications. Filter by the {resource_type, resource_id} of activity. Provide this in the format resource[]=person,1234
     */
    resource?: string;
    /**
     * Whether to include total_pages and total_count in the metadata. Defaults to false
     */
    includePagingCounts?: boolean;
    /**
     * Equality filters that are applied to the occurred_at field. A single filter can be used by itself or combined with other filters to create a range.
     *
     * @remarks
     * ---CUSTOM---
     * {"keys":[{"description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"gt","type":"iso8601 string"},{"description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"gte","type":"iso8601 string"},{"description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"lt","type":"iso8601 string"},{"description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"lte","type":"iso8601 string"}],"type":"object"}
     *
     */
    occurredAt?: Record<string, any>;
    /**
     * The current page to fetch results from. Defaults to 1
     */
    page?: number;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * Filter by the pinned status of activity. Must be 'true' or 'false'
     */
    pinned?: boolean;
    /**
     * Filter by the resource id. "resource_type" filter is required to use this filter.
     */
    resourceId?: string[];
    /**
     * Filter by the resource type. A resource is a Salesloft object that the activity is attributed to. A valid resource types must be one of person, account, crm_opportunity. Can be provided as an array
     */
    resourceType?: string;
    /**
     * Key to sort on, must be one of: occurred_at, updated_at. Defaults to occurred_at
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
    /**
     * Filter by the type of activity. Must be one of: added_to_cadence, completed_action, call, requested_email, sent_email, received_email, email_reply, note, success, dnc_event, residency_change, meeting, meeting_held, message_conversation, task, voicemail, opportunity_stage_change, opportunity_amount_change, opportunity_close_date_change. Can be provided as an array, or as an object of type[resource_type][]=type
     */
    type?: string;
    /**
     * Equality filters that are applied to the updated_at field. A single filter can be used by itself or combined with other filters to create a range.
     *
     * @remarks
     * ---CUSTOM---
     * {"keys":[{"description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"gt","type":"iso8601 string"},{"description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"gte","type":"iso8601 string"},{"description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"lt","type":"iso8601 string"},{"description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision.","name":"lte","type":"iso8601 string"}],"type":"object"}
     *
     */
    updatedAt?: Record<string, any>;
    /**
     * Filter activities by a user's guid.
     */
    userGuid?: string;
}
export declare class GetV2ActivityHistoriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
