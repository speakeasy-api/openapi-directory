import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaPriceInfoPriceRange } from "./googlecloudretailv2betapriceinfopricerange";
/**
 * The price information of a Product.
 */
export declare class GoogleCloudRetailV2betaPriceInfo extends SpeakeasyBase {
    /**
     * The costs associated with the sale of a particular product. Used for gross profit reporting. * Profit = price - cost Google Merchant Center property [cost_of_goods_sold](https://support.google.com/merchants/answer/9017895).
     */
    cost?: number;
    /**
     * The 3-letter currency code defined in [ISO 4217](https://www.iso.org/iso-4217-currency-codes.html). If this field is an unrecognizable currency code, an INVALID_ARGUMENT error is returned. The Product.Type.VARIANT Products with the same Product.primary_product_id must share the same currency_code. Otherwise, a FAILED_PRECONDITION error is returned.
     */
    currencyCode?: string;
    /**
     * Price of the product without any discount. If zero, by default set to be the price. If set, original_price should be greater than or equal to price, otherwise an INVALID_ARGUMENT error is thrown.
     */
    originalPrice?: number;
    /**
     * Price of the product. Google Merchant Center property [price](https://support.google.com/merchants/answer/6324371). Schema.org property [Offer.price](https://schema.org/price).
     */
    price?: number;
    /**
     * The timestamp when the price starts to be effective. This can be set as a future timestamp, and the price is only used for search after price_effective_time. If so, the original_price must be set and original_price is used before price_effective_time. Do not set if price is always effective because it will cause additional latency during search.
     */
    priceEffectiveTime?: string;
    /**
     * The timestamp when the price stops to be effective. The price is used for search before price_expire_time. If this field is set, the original_price must be set and original_price is used after price_expire_time. Do not set if price is always effective because it will cause additional latency during search.
     */
    priceExpireTime?: string;
    /**
     * The price range of all variant Product having the same Product.primary_product_id.
     */
    priceRange?: GoogleCloudRetailV2betaPriceInfoPriceRange;
}
