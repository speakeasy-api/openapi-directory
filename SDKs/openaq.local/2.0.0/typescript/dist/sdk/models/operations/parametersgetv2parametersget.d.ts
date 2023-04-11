import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * An enumeration.
 */
export declare enum ParametersGetV2ParametersGetSortSortEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class ParametersGetV2ParametersGetRequest extends SpeakeasyBase {
    /**
     * Change the number of results returned.
     */
    limit?: number;
    offset?: number;
    orderBy?: any;
    /**
     * Paginate through results.
     */
    page?: number;
    /**
     * Define sort order.
     */
    sort?: ParametersGetV2ParametersGetSortSortEnum;
    sourceId?: number[];
    sourceName?: string[];
    sourceSlug?: string[];
}
export declare class ParametersGetV2ParametersGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Validation Error
     */
    httpValidationError?: shared.HTTPValidationError;
    /**
     * Successful Response
     */
    openAQParametersResult?: shared.OpenAQParametersResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
