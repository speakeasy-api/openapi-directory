import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2CadenceMembershipsJsonRequest extends SpeakeasyBase {
    /**
     * ID of the cadence to find cadence memberships for
     */
    cadenceId?: number;
    /**
     * If true, return only cadence memberships for people currently on cadences.  If false, return cadence memberships for people who have been removed from or have completed a cadence.
     */
    currentlyOnCadence?: boolean;
    /**
     * IDs of cadence memberships to fetch. If a record can't be found, that record won't be returned and your request will be successful
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
     * The current page to fetch results from. Defaults to 1
     */
    page?: number;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * ID of the person to find cadence memberships for
     */
    personId?: number;
    /**
     * Key to sort on, must be one of: added_at, updated_at. Defaults to updated_at
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
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
export declare class GetV2CadenceMembershipsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
