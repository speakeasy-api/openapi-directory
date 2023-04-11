import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogObject } from "./catalogobject";
import { ErrorT } from "./error";
/**
 * Defines the response body returned from the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items) endpoint.
 */
export declare class SearchCatalogItemsResponse extends SpeakeasyBase {
    /**
     * Pagination token used in the next request to return more of the search result.
     */
    cursor?: string;
    /**
     * Any errors that occurred during the request.
     */
    errors?: ErrorT[];
    /**
     * Returned items matching the specified query expressions.
     */
    items?: CatalogObject[];
    /**
     * Ids of returned item variations matching the specified query expression.
     */
    matchedVariationIds?: string[];
}
