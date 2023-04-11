import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://docs.github.com/enterprise-server@3.8/rest/reference/search#ranking-search-results)
 */
export declare enum SearchReposSortEnum {
    Stars = "stars",
    Forks = "forks",
    HelpWantedIssues = "help-wanted-issues",
    Updated = "updated"
}
export declare class SearchReposRequest extends SpeakeasyBase {
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
     * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub Enterprise Server. The REST API supports the same qualifiers as the web interface for GitHub Enterprise Server. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.8/rest/reference/search#constructing-a-search-query). See "[Searching for repositories](https://docs.github.com/enterprise-server@3.8/articles/searching-for-repositories/)" for a detailed list of qualifiers.
     */
    q: string;
    /**
     * Sorts the results of your query by number of `stars`, `forks`, or `help-wanted-issues` or how recently the items were `updated`. Default: [best match](https://docs.github.com/enterprise-server@3.8/rest/reference/search#ranking-search-results)
     */
    sort?: SearchReposSortEnum;
}
/**
 * Service unavailable
 */
export declare class SearchRepos503ApplicationJSON extends SpeakeasyBase {
    code?: string;
    documentationUrl?: string;
    message?: string;
}
/**
 * Response
 */
export declare class SearchRepos200ApplicationJSON extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.RepoSearchResultItem[];
    totalCount: number;
}
export declare class SearchReposResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    searchRepos200ApplicationJSONObject?: SearchRepos200ApplicationJSON;
    /**
     * Service unavailable
     */
    searchRepos503ApplicationJSONObject?: SearchRepos503ApplicationJSON;
    /**
     * Validation failed, or the endpoint has been spammed.
     */
    validationError?: shared.ValidationError;
}
