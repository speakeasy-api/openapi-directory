import { SpeakeasyBase } from "../../../internal/utils";
import { PriceAmount } from "./priceamount";
import { PromotionPromotionStatus } from "./promotionpromotionstatus";
import { TimePeriod } from "./timeperiod";
/**
 * Required. Coupon value type for the promotion.
 */
export declare enum PromotionCouponValueTypeEnum {
    CouponValueTypeUnspecified = "COUPON_VALUE_TYPE_UNSPECIFIED",
    MoneyOff = "MONEY_OFF",
    PercentOff = "PERCENT_OFF",
    BuyMGetNMoneyOff = "BUY_M_GET_N_MONEY_OFF",
    BuyMGetNPercentOff = "BUY_M_GET_N_PERCENT_OFF",
    BuyMGetMoneyOff = "BUY_M_GET_MONEY_OFF",
    BuyMGetPercentOff = "BUY_M_GET_PERCENT_OFF",
    FreeGift = "FREE_GIFT",
    FreeGiftWithValue = "FREE_GIFT_WITH_VALUE",
    FreeGiftWithItemId = "FREE_GIFT_WITH_ITEM_ID",
    FreeShippingStandard = "FREE_SHIPPING_STANDARD",
    FreeShippingOvernight = "FREE_SHIPPING_OVERNIGHT",
    FreeShippingTwoDay = "FREE_SHIPPING_TWO_DAY"
}
/**
 * Required. Type of the promotion.
 */
export declare enum PromotionOfferTypeEnum {
    OfferTypeUnspecified = "OFFER_TYPE_UNSPECIFIED",
    NoCode = "NO_CODE",
    GenericCode = "GENERIC_CODE"
}
/**
 * Required. Applicability of the promotion to either all products or only specific products.
 */
export declare enum PromotionProductApplicabilityEnum {
    ProductApplicabilityUnspecified = "PRODUCT_APPLICABILITY_UNSPECIFIED",
    AllProducts = "ALL_PRODUCTS",
    SpecificProducts = "SPECIFIC_PRODUCTS"
}
export declare enum PromotionRedemptionChannelEnum {
    RedemptionChannelUnspecified = "REDEMPTION_CHANNEL_UNSPECIFIED",
    InStore = "IN_STORE",
    Online = "ONLINE"
}
/**
 * Whether the promotion applies to all stores, or only specified stores. Local Inventory ads promotions throw an error if no store applicability is included. An INVALID_ARGUMENT error is thrown if store_applicability is set to ALL_STORES and store_code or score_code_exclusion is set to a value.
 */
export declare enum PromotionStoreApplicabilityEnum {
    StoreApplicabilityUnspecified = "STORE_APPLICABILITY_UNSPECIFIED",
    AllStores = "ALL_STORES",
    SpecificStores = "SPECIFIC_STORES"
}
/**
 * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
 */
export declare class Promotion extends SpeakeasyBase {
    /**
     * Product filter by brand for the promotion.
     */
    brand?: string[];
    /**
     * Product filter by brand exclusion for the promotion.
     */
    brandExclusion?: string[];
    /**
     * Required. The content language used as part of the unique identifier. `en` content language is available for all target countries. `fr` content language is available for `CA` and `FR` target countries. `de` content language is available for `DE` target country. `nl` content language is available for `NL` target country. `it` content language is available for `IT` target country. `pt` content language is available for `BR` target country. `ja` content language is available for `JP` target country. `ko` content language is available for `KR` target country.
     */
    contentLanguage?: string;
    /**
     * Required. Coupon value type for the promotion.
     */
    couponValueType?: PromotionCouponValueTypeEnum;
    /**
     * Free gift description for the promotion.
     */
    freeGiftDescription?: string;
    /**
     * Free gift item ID for the promotion.
     */
    freeGiftItemId?: string;
    /**
     * The price represented as a number and currency.
     */
    freeGiftValue?: PriceAmount;
    /**
     * Generic redemption code for the promotion. To be used with the `offerType` field.
     */
    genericRedemptionCode?: string;
    /**
     * The number of items discounted in the promotion.
     */
    getThisQuantityDiscounted?: number;
    /**
     * Required. Output only. The REST promotion ID to uniquely identify the promotion. Content API methods that operate on promotions take this as their `promotionId` parameter. The REST ID for a promotion is of the form channel:contentLanguage:targetCountry:promotionId The `channel` field has a value of `"online"`, `"in_store"`, or `"online_in_store"`.
     */
    id?: string;
    /**
     * Product filter by item group ID for the promotion.
     */
    itemGroupId?: string[];
    /**
     * Product filter by item group ID exclusion for the promotion.
     */
    itemGroupIdExclusion?: string[];
    /**
     * Product filter by item ID for the promotion.
     */
    itemId?: string[];
    /**
     * Product filter by item ID exclusion for the promotion.
     */
    itemIdExclusion?: string[];
    /**
     * Maximum purchase quantity for the promotion.
     */
    limitQuantity?: number;
    /**
     * The price represented as a number and currency.
     */
    limitValue?: PriceAmount;
    /**
     * Required. Long title for the promotion.
     */
    longTitle?: string;
    /**
     * The price represented as a number and currency.
     */
    minimumPurchaseAmount?: PriceAmount;
    /**
     * Minimum purchase quantity for the promotion.
     */
    minimumPurchaseQuantity?: number;
    /**
     * The price represented as a number and currency.
     */
    moneyBudget?: PriceAmount;
    /**
     * The price represented as a number and currency.
     */
    moneyOffAmount?: PriceAmount;
    /**
     * Required. Type of the promotion.
     */
    offerType?: PromotionOfferTypeEnum;
    /**
     * Order limit for the promotion.
     */
    orderLimit?: number;
    /**
     * The percentage discount offered in the promotion.
     */
    percentOff?: number;
    /**
     * Required. Applicability of the promotion to either all products or only specific products.
     */
    productApplicability?: PromotionProductApplicabilityEnum;
    /**
     * Product filter by product type for the promotion.
     */
    productType?: string[];
    /**
     * Product filter by product type exclusion for the promotion.
     */
    productTypeExclusion?: string[];
    /**
     * Destination ID for the promotion.
     */
    promotionDestinationIds?: string[];
    /**
     * String representation of the promotion display dates. Deprecated. Use `promotion_display_time_period` instead.
     */
    promotionDisplayDates?: string;
    /**
     * A message that represents a time period.
     */
    promotionDisplayTimePeriod?: TimePeriod;
    /**
     * String representation of the promotion effective dates. Deprecated. Use `promotion_effective_time_period` instead.
     */
    promotionEffectiveDates?: string;
    /**
     * A message that represents a time period.
     */
    promotionEffectiveTimePeriod?: TimePeriod;
    /**
     * Required. The user provided promotion ID to uniquely identify the promotion.
     */
    promotionId?: string;
    /**
     * The status of the promotion.
     */
    promotionStatus?: PromotionPromotionStatus;
    /**
     * URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no promo url is included. URL is used to confirm that the promotion is valid and can be redeemed.
     */
    promotionUrl?: string;
    /**
     * Required. Redemption channel for the promotion. At least one channel is required.
     */
    redemptionChannel?: PromotionRedemptionChannelEnum[];
    /**
     * Shipping service names for the promotion.
     */
    shippingServiceNames?: string[];
    /**
     * Whether the promotion applies to all stores, or only specified stores. Local Inventory ads promotions throw an error if no store applicability is included. An INVALID_ARGUMENT error is thrown if store_applicability is set to ALL_STORES and store_code or score_code_exclusion is set to a value.
     */
    storeApplicability?: PromotionStoreApplicabilityEnum;
    /**
     * Store codes to include for the promotion.
     */
    storeCode?: string[];
    /**
     * Store codes to exclude for the promotion.
     */
    storeCodeExclusion?: string[];
    /**
     * Required. The target country used as part of the unique identifier. Can be `AU`, `CA`, `DE`, `FR`, `GB`, `IN`, `US`, `BR`, `ES`, `NL`, `JP`, `IT` or `KR`.
     */
    targetCountry?: string;
}
/**
 * Represents a promotion. See the following articles for more details. * [Promotions feed specification](https://support.google.com/merchants/answer/2906014) * [Local promotions feed specification](https://support.google.com/merchants/answer/10146130) * [Promotions on Buy on Google product data specification](https://support.google.com/merchants/answer/9173673)
 */
export declare class PromotionInput extends SpeakeasyBase {
    /**
     * Product filter by brand for the promotion.
     */
    brand?: string[];
    /**
     * Product filter by brand exclusion for the promotion.
     */
    brandExclusion?: string[];
    /**
     * Required. The content language used as part of the unique identifier. `en` content language is available for all target countries. `fr` content language is available for `CA` and `FR` target countries. `de` content language is available for `DE` target country. `nl` content language is available for `NL` target country. `it` content language is available for `IT` target country. `pt` content language is available for `BR` target country. `ja` content language is available for `JP` target country. `ko` content language is available for `KR` target country.
     */
    contentLanguage?: string;
    /**
     * Required. Coupon value type for the promotion.
     */
    couponValueType?: PromotionCouponValueTypeEnum;
    /**
     * Free gift description for the promotion.
     */
    freeGiftDescription?: string;
    /**
     * Free gift item ID for the promotion.
     */
    freeGiftItemId?: string;
    /**
     * The price represented as a number and currency.
     */
    freeGiftValue?: PriceAmount;
    /**
     * Generic redemption code for the promotion. To be used with the `offerType` field.
     */
    genericRedemptionCode?: string;
    /**
     * The number of items discounted in the promotion.
     */
    getThisQuantityDiscounted?: number;
    /**
     * Product filter by item group ID for the promotion.
     */
    itemGroupId?: string[];
    /**
     * Product filter by item group ID exclusion for the promotion.
     */
    itemGroupIdExclusion?: string[];
    /**
     * Product filter by item ID for the promotion.
     */
    itemId?: string[];
    /**
     * Product filter by item ID exclusion for the promotion.
     */
    itemIdExclusion?: string[];
    /**
     * Maximum purchase quantity for the promotion.
     */
    limitQuantity?: number;
    /**
     * The price represented as a number and currency.
     */
    limitValue?: PriceAmount;
    /**
     * Required. Long title for the promotion.
     */
    longTitle?: string;
    /**
     * The price represented as a number and currency.
     */
    minimumPurchaseAmount?: PriceAmount;
    /**
     * Minimum purchase quantity for the promotion.
     */
    minimumPurchaseQuantity?: number;
    /**
     * The price represented as a number and currency.
     */
    moneyBudget?: PriceAmount;
    /**
     * The price represented as a number and currency.
     */
    moneyOffAmount?: PriceAmount;
    /**
     * Required. Type of the promotion.
     */
    offerType?: PromotionOfferTypeEnum;
    /**
     * Order limit for the promotion.
     */
    orderLimit?: number;
    /**
     * The percentage discount offered in the promotion.
     */
    percentOff?: number;
    /**
     * Required. Applicability of the promotion to either all products or only specific products.
     */
    productApplicability?: PromotionProductApplicabilityEnum;
    /**
     * Product filter by product type for the promotion.
     */
    productType?: string[];
    /**
     * Product filter by product type exclusion for the promotion.
     */
    productTypeExclusion?: string[];
    /**
     * Destination ID for the promotion.
     */
    promotionDestinationIds?: string[];
    /**
     * String representation of the promotion display dates. Deprecated. Use `promotion_display_time_period` instead.
     */
    promotionDisplayDates?: string;
    /**
     * A message that represents a time period.
     */
    promotionDisplayTimePeriod?: TimePeriod;
    /**
     * String representation of the promotion effective dates. Deprecated. Use `promotion_effective_time_period` instead.
     */
    promotionEffectiveDates?: string;
    /**
     * A message that represents a time period.
     */
    promotionEffectiveTimePeriod?: TimePeriod;
    /**
     * Required. The user provided promotion ID to uniquely identify the promotion.
     */
    promotionId?: string;
    /**
     * The status of the promotion.
     */
    promotionStatus?: PromotionPromotionStatus;
    /**
     * URL to the page on the merchant's site where the promotion shows. Local Inventory ads promotions throw an error if no promo url is included. URL is used to confirm that the promotion is valid and can be redeemed.
     */
    promotionUrl?: string;
    /**
     * Required. Redemption channel for the promotion. At least one channel is required.
     */
    redemptionChannel?: PromotionRedemptionChannelEnum[];
    /**
     * Shipping service names for the promotion.
     */
    shippingServiceNames?: string[];
    /**
     * Whether the promotion applies to all stores, or only specified stores. Local Inventory ads promotions throw an error if no store applicability is included. An INVALID_ARGUMENT error is thrown if store_applicability is set to ALL_STORES and store_code or score_code_exclusion is set to a value.
     */
    storeApplicability?: PromotionStoreApplicabilityEnum;
    /**
     * Store codes to include for the promotion.
     */
    storeCode?: string[];
    /**
     * Store codes to exclude for the promotion.
     */
    storeCodeExclusion?: string[];
    /**
     * Required. The target country used as part of the unique identifier. Can be `AU`, `CA`, `DE`, `FR`, `GB`, `IN`, `US`, `BR`, `ES`, `NL`, `JP`, `IT` or `KR`.
     */
    targetCountry?: string;
}
