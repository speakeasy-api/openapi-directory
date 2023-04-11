import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A product detail of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#productdetail.
 */
export declare class ProductDetail extends SpeakeasyBase {
    /**
     * The name of the attribute.
     */
    attributeName?: string;
    /**
     * The value of the attribute.
     */
    attributeValue?: string;
    /**
     * A short section name that can be reused between multiple product details.
     */
    sectionName?: string;
}
