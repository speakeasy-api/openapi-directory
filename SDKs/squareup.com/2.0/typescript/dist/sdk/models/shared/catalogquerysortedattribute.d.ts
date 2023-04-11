import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The query expression to specify the key to sort search results.
 */
export declare class CatalogQuerySortedAttribute extends SpeakeasyBase {
    /**
     * The attribute whose value is used as the sort key.
     */
    attributeName: string;
    /**
     * The first attribute value to be returned by the query. Ascending sorts will return only
     *
     * @remarks
     * objects with this value or greater, while descending sorts will return only objects with this value
     * or less. If unset, start at the beginning (for ascending sorts) or end (for descending sorts).
     */
    initialAttributeValue?: string;
    /**
     * The desired sort order, `"ASC"` (ascending) or `"DESC"` (descending).
     */
    sortOrder?: string;
}
