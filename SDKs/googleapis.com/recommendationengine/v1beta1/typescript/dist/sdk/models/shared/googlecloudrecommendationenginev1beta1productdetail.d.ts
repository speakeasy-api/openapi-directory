import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1FeatureMap } from "./googlecloudrecommendationenginev1beta1featuremap";
/**
 * Optional. Item stock state. If provided, this overrides the stock state in Catalog for items in this event.
 */
export declare enum GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum {
    StockStateUnspecified = "STOCK_STATE_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}
/**
 * Detailed product information associated with a user event.
 */
export declare class GoogleCloudRecommendationengineV1beta1ProductDetail extends SpeakeasyBase {
    /**
     * Optional. Quantity of the products in stock when a user event happens. Optional. If provided, this overrides the available quantity in Catalog for this event. and can only be set if `stock_status` is set to `IN_STOCK`. Note that if an item is out of stock, you must set the `stock_state` field to be `OUT_OF_STOCK`. Leaving this field unspecified / as zero is not sufficient to mark the item out of stock.
     */
    availableQuantity?: number;
    /**
     * Optional. Currency code for price/costs. Use three-character ISO-4217 code. Required only if originalPrice or displayPrice is set.
     */
    currencyCode?: string;
    /**
     * Optional. Display price of the product (e.g. discounted price). If provided, this will override the display price in Catalog for this product.
     */
    displayPrice?: number;
    /**
     * Required. Catalog item ID. UTF-8 encoded string with a length limit of 128 characters.
     */
    id?: string;
    /**
     * FeatureMap represents extra features that customers want to include in the recommendation model for catalogs/user events as categorical/numerical features.
     */
    itemAttributes?: GoogleCloudRecommendationengineV1beta1FeatureMap;
    /**
     * Optional. Original price of the product. If provided, this will override the original price in Catalog for this product.
     */
    originalPrice?: number;
    /**
     * Optional. Quantity of the product associated with the user event. For example, this field will be 2 if two products are added to the shopping cart for `add-to-cart` event. Required for `add-to-cart`, `add-to-list`, `remove-from-cart`, `checkout-start`, `purchase-complete`, `refund` event types.
     */
    quantity?: number;
    /**
     * Optional. Item stock state. If provided, this overrides the stock state in Catalog for items in this event.
     */
    stockState?: GoogleCloudRecommendationengineV1beta1ProductDetailStockStateEnum;
}
