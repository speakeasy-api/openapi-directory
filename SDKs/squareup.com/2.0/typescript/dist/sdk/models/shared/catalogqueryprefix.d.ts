import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The query filter to return the search result whose named attribute values are prefixed by the specified attribute value.
 */
export declare class CatalogQueryPrefix extends SpeakeasyBase {
    /**
     * The name of the attribute to be searched.
     */
    attributeName: string;
    /**
     * The desired prefix of the search attribute value.
     */
    attributePrefix: string;
}
