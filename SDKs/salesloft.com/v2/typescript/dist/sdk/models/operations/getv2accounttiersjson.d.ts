import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2AccountTiersJsonRequest extends SpeakeasyBase {
    /**
     * IDs of Account Tiers to fetch. If a record can't be found, that record won't be returned and your request will be successful
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
     * Filters Account Tiers by name. Multiple names can be applied
     */
    name?: string[];
    /**
     * The current page to fetch results from. Defaults to 1
     */
    page?: number;
    /**
     * How many records to show per page in the range [1, 100]. Defaults to 25
     */
    perPage?: number;
    /**
     * Key to sort on, must be one of: created_at, updated_at, order. Defaults to updated_at
     */
    sortBy?: string;
    /**
     * Direction to sort in, must be one of: ASC, DESC. Defaults to DESC
     */
    sortDirection?: string;
}
export declare class GetV2AccountTiersJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
