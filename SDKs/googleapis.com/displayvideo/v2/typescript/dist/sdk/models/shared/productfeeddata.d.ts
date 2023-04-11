import { SpeakeasyBase } from "../../../internal/utils";
import { ProductMatchDimension } from "./productmatchdimension";
/**
 * How products are selected by the product feed.
 */
export declare enum ProductFeedDataProductMatchTypeEnum {
    ProductMatchTypeUnspecified = "PRODUCT_MATCH_TYPE_UNSPECIFIED",
    ProductMatchTypeAllProducts = "PRODUCT_MATCH_TYPE_ALL_PRODUCTS",
    ProductMatchTypeSpecificProducts = "PRODUCT_MATCH_TYPE_SPECIFIC_PRODUCTS",
    ProductMatchTypeCustomLabel = "PRODUCT_MATCH_TYPE_CUSTOM_LABEL"
}
/**
 * The details of product feed.
 */
export declare class ProductFeedData extends SpeakeasyBase {
    /**
     * Whether the product feed has opted-out of showing products.
     */
    isFeedDisabled?: boolean;
    /**
     * A list of dimensions used to match products.
     */
    productMatchDimensions?: ProductMatchDimension[];
    /**
     * How products are selected by the product feed.
     */
    productMatchType?: ProductFeedDataProductMatchTypeEnum;
}
