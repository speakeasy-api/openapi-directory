import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2PeopleJsonRequest extends SpeakeasyBase {
    /**
     * For internal use only. This field does not comply with our backwards compatibility policies. This filter is for authenticated users of Salesloft only and will not work for OAuth Applications. Filters people by the string provided. Can search and filter by name, title, industry, email_address and linked account name.
     */
    query?: string;
    /**
     * Filters people by the account they are linked to. Multiple account ids can be applied
     */
    accountId?: number[];
    /**
     * Filters people by whether an email that was sent to them bounced or not.
     */
    bounced?: boolean;
    /**
     * Filters people by the cadence that they are currently on. Multiple cadence_ids can be applied. An additional value of "_is_null" can be passed to filter people that are not on a cadence.
     */
    cadenceId?: number[];
    /**
     * Includes people that can be called given do_not_contact and contact_restrictions property
     */
    canCall?: boolean;
    /**
     * Includes people that can be emailed given do_not_contact and contact_restrictions property
     */
    canEmail?: boolean;
    /**
     * Includes people that can be sent a text message given do_not_contact and contact_restrictions property
     */
    canText?: boolean;
    /**
     * Filters people by their city by exact match. Supports partial matching
     */
    city?: string[];
    /**
     * Filters people by their country by exact match. Supports partial matching
     */
    country?: string[];
    /**
     * Equality filters that are applied to the last_contacted field. A single filter can be used by itself or combined with other filters to create a range.
     *
     * @remarks
     *
     * ---CUSTOM---
     * {"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}
     *
     */
    createdAt?: Record<string, any>;
    /**
     * Filters people by crm_id. Multiple crm ids can be applied
     */
    crmId?: string[];
    /**
     * Filters by people matching all given custom fields. The custom field names are case-sensitive, but the provided values are case-insensitive. Example: v2/people?custom_fields[custom_field_name]=custom_field_value
     */
    customFields?: Record<string, any>;
    /**
     * Includes people that have a given do_not_contact property
     */
    doNotContact?: boolean;
    /**
     * Filters people by email address. Multiple emails can be applied. An additional value of "_is_null" can be passed to filter people that do not have an email address.
     */
    emailAddresses?: string[];
    /**
     * Filters people by whether or not they are marked as an European Union Resident or not.
     */
    euResident?: boolean;
    /**
     * IDs of people to fetch. If a record can't be found, that record won't be returned and your request will be successful
     */
    ids?: number[];
    /**
     * Filters people that were imported by the given import ids. Multiple import ids can be applied. An additional value of "_is_null" can be passed to filter people that were not imported.
     */
    importId?: number[];
    /**
     * Whether to include total_pages and total_count in the metadata. Defaults to false
     */
    includePagingCounts?: boolean;
    /**
     * Filters people by job seniorty. Multiple job seniorities can be applied. An additional value of "_is_null" can be passed to filter people do not have a job_seniority.
     */
    jobSeniority?: string[];
    /**
     * Equality filters that are applied to the last_contacted field. A single filter can be used by itself or combined with other filters to create a range.
     *
     * @remarks
     * Additional values of "_is_null" or "_is_not_null" can be passed to filter records that either have no timestamp value or any timestamp value.
     * ---CUSTOM---
     * {"type":"object","keys":[{"name":"gt","type":"iso8601 string","description":"Returns all matching records that are greater than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"gte","type":"iso8601 string","description":"Returns all matching records that are greater than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lt","type":"iso8601 string","description":"Returns all matching records that are less than the provided iso8601 timestamp. The comparison is done using microsecond precision."},{"name":"lte","type":"iso8601 string","description":"Returns all matching records that are less than or equal to the provided iso8601 timestamp. The comparison is done using microsecond precision."}]}
     *
     */
    lastContacted?: Record<string, any>;
    /**
     * Specifies whether the max limit of 10k records should be applied to pagination counts. Affects the total_count and total_pages data
     */
    limitPagingCounts?: boolean;
    /**
     * Filters people by locales. Multiple locales can be applied. An additional value of "Null" can be passed to filter people that do not have a locale.
     */
    locales?: string[];
    /**
     * Filters people by whether or not that person is on a cadence or if they have been contacted in any way.
     */
    new?: boolean;
    /**
     * Filters people by the owner's guid. Multiple owner guids can be applied
     */
    ownedByGuid?: string[];
    /**
     * Filters people by owner_crm_id. Multiple owner_crm_ids can be applied. An additional value of "_is_null" can be passed to filter people that are unowned. A "_not_in" modifier can be used to exclude specific owner_crm_ids. Example: v2/people?owner_crm_id[_not_in]=id
     */
    ownerCrmId?: string[];
    /**
     * Filters people by owner_id. Multiple owner_ids can be applied.
     */
    ownerId?: number[];
    /**
     * Filters people by whether the owner is active or not.
     */
    ownerIsActive?: boolean;
    /**
     * The current page to fetch results from. Defaults to 1
     */
    page?: number;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * Includes people that have a given person_stage. Multiple person stage ids can be applied. An additional value of "_is_null" can be passed to filter people that do not have a stage set.
     */
    personStageId?: number[];
    /**
     * Filter people by whether or not they have a phone number or not
     */
    phoneNumber?: boolean;
    /**
     * Filters people by whether or not they have replied to an email or not.
     */
    replied?: boolean;
    /**
     * Key to sort on, must be one of: created_at, updated_at, last_contacted_at, name, title, job_seniority, call_count, sent_emails, clicked_emails, replied_emails, viewed_emails, account, cadence_stage_name. Defaults to updated_at
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
    /**
     * Filters people who have been starred by the user guids given.
     */
    starredByGuid?: string[];
    /**
     * Filters people by their state by exact match. Supports partial matching
     */
    state?: string[];
    /**
     * Filters people by whether or not they have been marked as a success or not.
     */
    success?: boolean;
    /**
     * Filters people by the tag ids applied to the person. Multiple tag ids can be applied.
     */
    tagId?: number[];
    /**
     * Filters people by their title by exact match. Supports partial matching
     */
    title?: string[];
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
}
export declare class GetV2PeopleJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
