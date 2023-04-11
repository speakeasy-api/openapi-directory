import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2EmailTemplatesJsonRequest extends SpeakeasyBase {
    /**
     * Filters email templates to those belonging to the cadence. Not to exceed 100 IDs. If a record can't be found, that record won't be returned and your request will be successful
     */
    cadenceId?: number[];
    /**
     * Filters email templates by current authenticated user
     */
    filterByOwner?: boolean;
    /**
     * Filters email templates by groups applied to the template by group ID. Not to exceed 500 IDs. Returns templates that are assigned to any of the group ids.
     */
    groupId?: number[];
    /**
     * IDs of email templates to fetch. If a record can't be found, that record won't be returned and your request will be successful
     */
    ids?: number[];
    /**
     * Filters email templates to include archived templates or not
     */
    includeArchivedTemplates?: boolean;
    /**
     * Filters email templates based on whether or not the template has been used on a cadence
     */
    includeCadenceTemplates?: boolean;
    /**
     * Whether to include total_pages and total_count in the metadata. Defaults to false
     */
    includePagingCounts?: boolean;
    /**
     * Specifies whether the max limit of 10k records should be applied to pagination counts. Affects the total_count and total_pages data
     */
    limitPagingCounts?: boolean;
    /**
     * Filters email templates by whether they are linked to a team template or not
     */
    linkedToTeamTemplate?: boolean;
    /**
     * The current page to fetch results from. Defaults to 1
     */
    page?: number;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * Filters email templates by title or subject
     */
    search?: string;
    /**
     * Key to sort on, must be one of: created_at, updated_at, last_used_at. Defaults to updated_at
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
    /**
     * Filters email templates by tags applied to the template, not to exceed 100 tags
     */
    tag?: string[];
    /**
     * Filters email templates by tags applied to the template by tag ID, not to exceed 100 IDs
     */
    tagIds?: number[];
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
export declare class GetV2EmailTemplatesJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
