import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope } from "./googleclouddatacatalogv1beta1searchcatalogrequestscope";
/**
 * Request message for SearchCatalog.
 */
export declare class GoogleCloudDatacatalogV1beta1SearchCatalogRequest extends SpeakeasyBase {
    /**
     * Specifies the ordering of results, currently supported case-sensitive choices are: * `relevance`, only supports descending * `last_modified_timestamp [asc|desc]`, defaults to descending if not specified * `default` that can only be descending If not specified, defaults to `relevance` descending.
     */
    orderBy?: string;
    /**
     * Number of results in the search page. If <=0 then defaults to 10. Max limit for page_size is 1000. Throws an invalid argument for page_size > 1000.
     */
    pageSize?: number;
    /**
     * Optional. Pagination token returned in an earlier SearchCatalogResponse.next_page_token, which indicates that this is a continuation of a prior SearchCatalogRequest call, and that the system should return the next page of data. If empty, the first page is returned.
     */
    pageToken?: string;
    /**
     * Optional. The query string in search query syntax. An empty query string will result in all data assets (in the specified scope) that the user has access to. Query strings can be simple as "x" or more qualified as: * name:x * column:x * description:y Note: Query tokens need to have a minimum of 3 characters for substring matching to work correctly. See [Data Catalog Search Syntax](https://cloud.google.com/data-catalog/docs/how-to/search-reference) for more information.
     */
    query?: string;
    /**
     * The criteria that select the subspace used for query matching.
     */
    scope?: GoogleCloudDatacatalogV1beta1SearchCatalogRequestScope;
}
