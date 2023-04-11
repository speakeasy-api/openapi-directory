import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecommendationengineV1beta1Image } from "./googlecloudrecommendationenginev1beta1image";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice } from "./googlecloudrecommendationenginev1beta1productcatalogitemexactprice";
import { GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange } from "./googlecloudrecommendationenginev1beta1productcatalogitempricerange";
/**
 * Optional. Online stock state of the catalog item. Default is `IN_STOCK`.
 */
export declare enum GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum {
    StockStateUnspecified = "STOCK_STATE_UNSPECIFIED",
    InStock = "IN_STOCK",
    OutOfStock = "OUT_OF_STOCK",
    Preorder = "PREORDER",
    Backorder = "BACKORDER"
}
/**
 * ProductCatalogItem captures item metadata specific to retail products.
 */
export declare class GoogleCloudRecommendationengineV1beta1ProductCatalogItem extends SpeakeasyBase {
    /**
     * Optional. The available quantity of the item.
     */
    availableQuantity?: string;
    /**
     * Optional. Canonical URL directly linking to the item detail page with a length limit of 5 KiB..
     */
    canonicalProductUri?: string;
    /**
     * Optional. A map to pass the costs associated with the product. For example: {"manufacturing": 45.5} The profit of selling this item is computed like so: * If 'exactPrice' is provided, profit = displayPrice - sum(costs) * If 'priceRange' is provided, profit = minPrice - sum(costs)
     */
    costs?: Record<string, number>;
    /**
     * Optional. Only required if the price is set. Currency code for price/costs. Use three-character ISO-4217 code.
     */
    currencyCode?: string;
    /**
     * Exact product price.
     */
    exactPrice?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice;
    /**
     * Optional. Product images for the catalog item.
     */
    images?: GoogleCloudRecommendationengineV1beta1Image[];
    /**
     * Product price range when there are a range of prices for different variations of the same product.
     */
    priceRange?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange;
    /**
     * Optional. Online stock state of the catalog item. Default is `IN_STOCK`.
     */
    stockState?: GoogleCloudRecommendationengineV1beta1ProductCatalogItemStockStateEnum;
}
