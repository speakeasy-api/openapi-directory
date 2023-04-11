import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum SourcesV1GetV1SourcesGetOrderBySourcesV1OrderEnum {
    Name = "name"
}
/**
 * An enumeration.
 */
export declare enum SourcesV1GetV1SourcesGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class SourcesV1GetV1SourcesGetRequest extends SpeakeasyBase {
    /**
     * Change the number of results returned.
     */
    limit?: number;
    name?: string;
    offset?: number;
    /**
     * An enumeration.
     */
    orderBy?: SourcesV1GetV1SourcesGetOrderBySourcesV1OrderEnum;
    /**
     * Paginate through results.
     */
    page?: number;
    /**
     * Define sort order.
     */
    sort?: SourcesV1GetV1SourcesGetSortSortEnum;
}
export declare class SourcesV1GetV1SourcesGetResponse extends SpeakeasyBase {
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
