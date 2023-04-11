import { SpeakeasyBase } from "../../../internal/utils";
import { CatalogQueryExact } from "./catalogqueryexact";
import { CatalogQueryItemsForItemOptions } from "./catalogqueryitemsforitemoptions";
import { CatalogQueryItemsForModifierList } from "./catalogqueryitemsformodifierlist";
import { CatalogQueryItemsForTax } from "./catalogqueryitemsfortax";
import { CatalogQueryItemVariationsForItemOptionValues } from "./catalogqueryitemvariationsforitemoptionvalues";
import { CatalogQueryPrefix } from "./catalogqueryprefix";
import { CatalogQueryRange } from "./catalogqueryrange";
import { CatalogQuerySet } from "./catalogqueryset";
import { CatalogQuerySortedAttribute } from "./catalogquerysortedattribute";
import { CatalogQueryText } from "./catalogquerytext";
/**
 * A query composed of one or more different types of filters to narrow the scope of targeted objects when calling the `SearchCatalogObjects` endpoint.
 *
 * @remarks
 *
 * Although a query can have multiple filters, only certain query types can be combined per call to [SearchCatalogObjects](https://developer.squareup.com/reference/square_2021-08-18/catalog-api/search-catalog-objects).
 * Any combination of the following types may be used together:
 * - [exact_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQueryExact)
 * - [prefix_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQueryPrefix)
 * - [range_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQueryRange)
 * - [sorted_attribute_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQuerySortedAttribute)
 * - [text_query](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogQueryText)
 * All other query types cannot be combined with any others.
 *
 * When a query filter is based on an attribute, the attribute must be searchable.
 * Searchable attributes are listed as follows, along their parent types that can be searched for with applicable query filters.
 *
 * * Searchable attribute and objects queryable by searchable attributes **
 * - `name`:  `CatalogItem`, `CatalogItemVariation`, `CatalogCategory`, `CatalogTax`, `CatalogDiscount`, `CatalogModifier`, 'CatalogModifierList`, `CatalogItemOption`, `CatalogItemOptionValue`
 * - `description`: `CatalogItem`, `CatalogItemOptionValue`
 * - `abbreviation`: `CatalogItem`
 * - `upc`: `CatalogItemVariation`
 * - `sku`: `CatalogItemVariation`
 * - `caption`: `CatalogImage`
 * - `display_name`: `CatalogItemOption`
 *
 * For example, to search for [CatalogItem](https://developer.squareup.com/reference/square_2021-08-18/objects/CatalogItem) objects by searchable attributes, you can use
 * the `"name"`, `"description"`, or `"abbreviation"` attribute in an applicable query filter.
 */
export declare class CatalogQuery extends SpeakeasyBase {
    /**
     * The query filter to return the search result by exact match of the specified attribute name and value.
     */
    exactQuery?: CatalogQueryExact;
    /**
     * The query filter to return the item variations containing the specified item option value IDs.
     */
    itemVariationsForItemOptionValuesQuery?: CatalogQueryItemVariationsForItemOptionValues;
    /**
     * The query filter to return the items containing the specified item option IDs.
     */
    itemsForItemOptionsQuery?: CatalogQueryItemsForItemOptions;
    /**
     * The query filter to return the items containing the specified modifier list IDs.
     */
    itemsForModifierListQuery?: CatalogQueryItemsForModifierList;
    /**
     * The query filter to return the items containing the specified tax IDs.
     */
    itemsForTaxQuery?: CatalogQueryItemsForTax;
    /**
     * The query filter to return the search result whose named attribute values are prefixed by the specified attribute value.
     */
    prefixQuery?: CatalogQueryPrefix;
    /**
     * The query filter to return the search result whose named attribute values fall between the specified range.
     */
    rangeQuery?: CatalogQueryRange;
    /**
     * The query filter to return the search result(s) by exact match of the specified `attribute_name` and any of
     *
     * @remarks
     * the `attribute_values`.
     */
    setQuery?: CatalogQuerySet;
    /**
     * The query expression to specify the key to sort search results.
     */
    sortedAttributeQuery?: CatalogQuerySortedAttribute;
    /**
     * The query filter to return the search result whose searchable attribute values contain all of the specified keywords or tokens, independent of the token order or case.
     */
    textQuery?: CatalogQueryText;
}
