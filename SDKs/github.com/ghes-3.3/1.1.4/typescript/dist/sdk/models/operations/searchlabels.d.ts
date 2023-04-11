import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://docs.github.com/enterprise-server@3.3/rest/reference/search#ranking-search-results)
 */
export declare enum SearchLabelsSortEnum {
    Created = "created",
    Updated = "updated"
}
export declare class SearchLabelsRequest extends SpeakeasyBase {
    /**
     * Determines whether the first search result returned is the highest number of matches (`desc`) or lowest number of matches (`asc`). This parameter is ignored unless you provide `sort`.
     */
    order?: shared.OrderEnum;
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The search keywords. This endpoint does not accept qualifiers in the query. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.3/rest/reference/search#constructing-a-search-query).
     */
    q: string;
    /**
     * The id of the repository.
     */
    repositoryId: number;
    /**
     * Sorts the results of your query by when the label was `created` or `updated`. Default: [best match](https://docs.github.com/enterprise-server@3.3/rest/reference/search#ranking-search-results)
     */
    sort?: SearchLabelsSortEnum;
}
/**
 * Response
 */
export declare class SearchLabels200ApplicationJSON extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.LabelSearchResultItem[];
    totalCount: number;
}
export declare class SearchLabelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Forbidden
     */
    basicError?: shared.BasicError;
    /**
     * Response
     */
    searchLabels200ApplicationJSONObject?: SearchLabels200ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
