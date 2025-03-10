import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1SearchCatalogRequestScope } from "./googleclouddatacatalogv1searchcatalogrequestscope";
/**
 * Request message for SearchCatalog.
 */
export declare class GoogleCloudDatacatalogV1SearchCatalogRequest extends SpeakeasyBase {
    /**
     * Specifies the order of results. Currently supported case-sensitive values are: * `relevance` that can only be descending * `last_modified_timestamp [asc|desc]` with descending (`desc`) as default * `default` that can only be descending If this parameter is omitted, it defaults to the descending `relevance`.
     */
    orderBy?: string;
    /**
     * Number of results to return in a single search page. Can't be negative or 0, defaults to 10 in this case. The maximum number is 1000. If exceeded, throws an "invalid argument" exception.
     */
    pageSize?: number;
    /**
     * Optional. Pagination token that, if specified, returns the next page of search results. If empty, returns the first page. This token is returned in the SearchCatalogResponse.next_page_token field of the response to a previous SearchCatalogRequest call.
     */
    pageToken?: string;
    /**
     * Optional. The query string with a minimum of 3 characters and specific syntax. For more information, see [Data Catalog search syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference). An empty query string returns all data assets (in the specified scope) that you have access to. A query string can be a simple `xyz` or qualified by predicates: * `name:x` * `column:y` * `description:z`
     */
    query?: string;
    /**
     * The criteria that select the subspace used for query matching.
     */
    scope?: GoogleCloudDatacatalogV1SearchCatalogRequestScope;
}
