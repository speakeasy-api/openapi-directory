import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The query filter to return the search result(s) by exact match of the specified `attribute_name` and any of
 *
 * @remarks
 * the `attribute_values`.
 */
export declare class CatalogQuerySet extends SpeakeasyBase {
    /**
     * The name of the attribute to be searched. Matching of the attribute name is exact.
     */
    attributeName: string;
    /**
     * The desired values of the search attribute. Matching of the attribute values is exact and case insensitive.
     *
     * @remarks
     * A maximum of 250 values may be searched in a request.
     */
    attributeValues: string[];
}
