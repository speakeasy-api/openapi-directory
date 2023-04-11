import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAttributeFilter } from "./customattributefilter";
/**
 * Defines the request body for the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items) endpoint.
 */
export declare class SearchCatalogItemsRequest extends SpeakeasyBase {
    /**
     * The category id query expression to return items containing the specified category IDs.
     */
    categoryIds?: string[];
    /**
     * The pagination token, returned in the previous response, used to fetch the next batch of pending results.
     */
    cursor?: string;
    /**
     * The customer-attribute filter to return items or item variations matching the specified
     *
     * @remarks
     * custom attribute expressions. A maximum number of 10 custom attribute expressions are supported in
     * a single call to the [SearchCatalogItems](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-items) endpoint.
     */
    customAttributeFilters?: CustomAttributeFilter[];
    /**
     * The enabled-location query expression to return items and item variations having specified enabled locations.
     */
    enabledLocationIds?: string[];
    /**
     * The maximum number of results to return per page. The default value is 100.
     */
    limit?: number;
    /**
     * The product types query expression to return items or item variations having the specified product types.
     */
    productTypes?: string[];
    /**
     * The order to sort the results by item names. The default sort order is ascending (`ASC`).
     */
    sortOrder?: string;
    /**
     * The stock-level query expression to return item variations with the specified stock levels.
     */
    stockLevels?: string[];
    /**
     * The text filter expression to return items or item variations containing specified text in
     *
     * @remarks
     * the `name`, `description`, or `abbreviation` attribute value of an item, or in
     * the `name`, `sku`, or `upc` attribute value of an item variation.
     */
    textFilter?: string;
}
