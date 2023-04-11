import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The query filter to return the search result whose named attribute values fall between the specified range.
 */
export declare class CatalogQueryRange extends SpeakeasyBase {
    /**
     * The desired maximum value for the search attribute (inclusive).
     */
    attributeMaxValue?: number;
    /**
     * The desired minimum value for the search attribute (inclusive).
     */
    attributeMinValue?: number;
    /**
     * The name of the attribute to be searched.
     */
    attributeName: string;
}
