import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://docs.github.com/enterprise-server@3.6/rest/reference/search#ranking-search-results)
 */
export declare enum SearchCommitsSortEnum {
    AuthorDate = "author-date",
    CommitterDate = "committer-date"
}
export declare class SearchCommitsRequest extends SpeakeasyBase {
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
     * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub Enterprise Server. The REST API supports the same qualifiers as the web interface for GitHub Enterprise Server. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.6/rest/reference/search#constructing-a-search-query). See "[Searching commits](https://docs.github.com/enterprise-server@3.6/search-github/searching-on-github/searching-commits)" for a detailed list of qualifiers.
     */
    q: string;
    /**
     * Sorts the results of your query by `author-date` or `committer-date`. Default: [best match](https://docs.github.com/enterprise-server@3.6/rest/reference/search#ranking-search-results)
     */
    sort?: SearchCommitsSortEnum;
}
/**
 * Response
 */
export declare class SearchCommits200ApplicationJSON extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.CommitSearchResultItem[];
    totalCount: number;
}
export declare class SearchCommitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    searchCommits200ApplicationJSONObject?: SearchCommits200ApplicationJSON;
}
