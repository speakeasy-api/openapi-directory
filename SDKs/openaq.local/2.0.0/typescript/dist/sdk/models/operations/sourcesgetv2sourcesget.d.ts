import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum SourcesGetV2SourcesGetOrderBySourcesOrderEnum {
    SourceName = "sourceName",
    FirstUpdated = "firstUpdated",
    LastUpdated = "lastUpdated"
}
/**
 * An enumeration.
 */
export declare enum SourcesGetV2SourcesGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class SourcesGetV2SourcesGetRequest extends SpeakeasyBase {
    /**
     * Change the number of results returned.
     */
    limit?: number;
    offset?: number;
    /**
     * An enumeration.
     */
    orderBy?: SourcesGetV2SourcesGetOrderBySourcesOrderEnum;
    /**
     * Paginate through results.
     */
    page?: number;
    /**
     * Define sort order.
     */
    sort?: SourcesGetV2SourcesGetSortSortEnum;
    sourceId?: number[];
    sourceName?: string[];
    sourceSlug?: string[];
}
export declare class SourcesGetV2SourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * Successful Response
     */
    openAQResult?: shared.OpenAQResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
