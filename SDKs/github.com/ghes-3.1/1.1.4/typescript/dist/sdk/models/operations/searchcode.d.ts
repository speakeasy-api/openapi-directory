import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub Enterprise Server search infrastructure. Default: [best match](https://docs.github.com/enterprise-server@3.1/rest/reference/search#ranking-search-results)
 */
export declare enum SearchCodeSortEnum {
    Indexed = "indexed"
}
export declare class SearchCodeRequest extends SpeakeasyBase {
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
     * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub Enterprise Server. The REST API supports the same qualifiers as the web interface for GitHub Enterprise Server. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.1/rest/reference/search#constructing-a-search-query). See "[Searching code](https://docs.github.com/enterprise-server@3.1/search-github/searching-on-github/searching-code)" for a detailed list of qualifiers.
     */
    q: string;
    /**
     * Sorts the results of your query. Can only be `indexed`, which indicates how recently a file has been indexed by the GitHub Enterprise Server search infrastructure. Default: [best match](https://docs.github.com/enterprise-server@3.1/rest/reference/search#ranking-search-results)
     */
    sort?: SearchCodeSortEnum;
}
/**
 * Service unavailable
 */
export declare class SearchCode503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
/**
 * Response
 */
export declare class SearchCode200ApplicationJSON extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.CodeSearchResultItem[];
    totalCount: number;
}
export declare class SearchCodeResponse extends SpeakeasyBase {
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
    searchCode200ApplicationJSONObject?: SearchCode200ApplicationJSON;
    /**
     * Service unavailable
     */
    searchCode503ApplicationJSONObject?: SearchCode503ApplicationJSON;
    /**
     * Validation failed
     */
    validationError?: shared.ValidationError;
}
