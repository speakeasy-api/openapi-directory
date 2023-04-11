import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SearchTopicsRequest extends SpeakeasyBase {
    /**
     * Page number of the results to fetch.
     */
    page?: number;
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub Enterprise Server. The REST API supports the same qualifiers as the web interface for GitHub Enterprise Server. To learn more about the format of the query, see [Constructing a search query](https://docs.github.com/enterprise-server@3.1/rest/reference/search#constructing-a-search-query).
     */
    q: string;
}
/**
 * Preview header missing
 */
export declare class SearchTopics415ApplicationJSON extends SpeakeasyBase {
    documentationUrl: string;
    message: string;
}
/**
 * Response
 */
export declare class SearchTopics200ApplicationJSON extends SpeakeasyBase {
    incompleteResults: boolean;
    items: shared.TopicSearchResultItem[];
    totalCount: number;
}
export declare class SearchTopicsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    searchTopics200ApplicationJSONObject?: SearchTopics200ApplicationJSON;
    /**
     * Preview header missing
     */
    searchTopics415ApplicationJSONObject?: SearchTopics415ApplicationJSON;
}
