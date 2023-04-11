import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The query filter to return the search result by exact match of the specified attribute name and value.
 */
export declare class CatalogQueryExact extends SpeakeasyBase {
    /**
     * The name of the attribute to be searched. Matching of the attribute name is exact.
     */
    attributeName: string;
    /**
     * The desired value of the search attribute. Matching of the attribute value is case insensitive and can be partial.
     *
     * @remarks
     * For example, if a specified value of "sma", objects with the named attribute value of "Small", "small" are both matched.
     */
    attributeValue: string;
}
