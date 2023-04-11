import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";
import { Installment } from "./installment";
import { LoyaltyPoints } from "./loyaltypoints";
import { Price } from "./price";
import { ProductDimension } from "./productdimension";
import { ProductProductDetail } from "./productproductdetail";
import { ProductShipping } from "./productshipping";
import { ProductShippingDimension } from "./productshippingdimension";
import { ProductShippingWeight } from "./productshippingweight";
import { ProductSubscriptionCost } from "./productsubscriptioncost";
import { ProductTax } from "./producttax";
import { ProductUnitPricingBaseMeasure } from "./productunitpricingbasemeasure";
import { ProductUnitPricingMeasure } from "./productunitpricingmeasure";
import { ProductWeight } from "./productweight";
/**
 *  Required product attributes are primarily defined by the product data specification. See the Product Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
 */
export declare class Product extends SpeakeasyBase {
    /**
     * Additional URLs of images of the item.
     */
    additionalImageLinks?: string[];
    /**
     * Additional cut of the item. Used together with size_type to represent combined size types for apparel items.
     */
    additionalSizeType?: string;
    /**
     * Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
     */
    adsGrouping?: string;
    /**
     * Similar to ads_grouping, but only works on CPC.
     */
    adsLabels?: string[];
    /**
     * Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
     */
    adsRedirect?: string;
    /**
     * Should be set to true if the item is targeted towards adults.
     */
    adult?: boolean;
    /**
     * Target age group of the item.
     */
    ageGroup?: string;
    /**
     * Availability status of the item.
     */
    availability?: string;
    /**
     * The day a pre-ordered product becomes available for delivery, in ISO 8601 format.
     */
    availabilityDate?: string;
    /**
     * Brand of the item.
     */
    brand?: string;
    /**
     * URL for the canonical version of your item's landing page.
     */
    canonicalLink?: string;
    /**
     * Required. The item's channel (online or local). Acceptable values are: - "`local`" - "`online`"
     */
    channel?: string;
    /**
     * Color of the item.
     */
    color?: string;
    /**
     * Condition or state of the item.
     */
    condition?: string;
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string;
    costOfGoodsSold?: Price;
    /**
     * A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions).
     */
    customAttributes?: CustomAttribute[];
    /**
     * Custom label 0 for custom grouping of items in a Shopping campaign.
     */
    customLabel0?: string;
    /**
     * Custom label 1 for custom grouping of items in a Shopping campaign.
     */
    customLabel1?: string;
    /**
     * Custom label 2 for custom grouping of items in a Shopping campaign.
     */
    customLabel2?: string;
    /**
     * Custom label 3 for custom grouping of items in a Shopping campaign.
     */
    customLabel3?: string;
    /**
     * Custom label 4 for custom grouping of items in a Shopping campaign.
     */
    customLabel4?: string;
    /**
     * Description of the item.
     */
    description?: string;
    /**
     * An identifier for an item for dynamic remarketing campaigns.
     */
    displayAdsId?: string;
    /**
     * URL directly to your item's landing page for dynamic remarketing campaigns.
     */
    displayAdsLink?: string;
    /**
     * Advertiser-specified recommendations.
     */
    displayAdsSimilarIds?: string[];
    /**
     * Title of an item for dynamic remarketing campaigns.
     */
    displayAdsTitle?: string;
    /**
     * Offer margin for dynamic remarketing campaigns.
     */
    displayAdsValue?: number;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.
     */
    energyEfficiencyClass?: string;
    /**
     * The list of destinations to exclude for this target (corresponds to cleared check boxes in Merchant Center). Products that are excluded from all destinations for more than 7 days are automatically deleted.
     */
    excludedDestinations?: string[];
    /**
     * Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future.
     */
    expirationDate?: string;
    /**
     * Required for multi-seller accounts. Use this attribute if you're a marketplace uploading products for various sellers to your multi-seller account.
     */
    externalSellerId?: string;
    /**
     * Feed label for the item. Either `targetCountry` or `feedLabel` is required. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-).
     */
    feedLabel?: string;
    /**
     * Target gender of the item.
     */
    gender?: string;
    /**
     * Google's category of the item (see [Google product taxonomy](https://support.google.com/merchants/answer/1705911)). When querying products, this field will contain the user provided value. There is currently no way to get back the auto assigned google product categories through the API.
     */
    googleProductCategory?: string;
    /**
     * Global Trade Item Number (GTIN) of the item.
     */
    gtin?: string;
    /**
     * The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product has one of the 2 forms channel:contentLanguage: targetCountry: offerId or channel:contentLanguage:feedLabel: offerId.
     */
    id?: string;
    /**
     * False when the item does not have unique product identifiers appropriate to its category, such as GTIN, MPN, and brand. Required according to the Unique Product Identifier Rules for all target countries except for Canada.
     */
    identifierExists?: boolean;
    /**
     * URL of an image of the item.
     */
    imageLink?: string;
    /**
     * The list of destinations to include for this target (corresponds to checked check boxes in Merchant Center). Default destinations are always included unless provided in `excludedDestinations`.
     */
    includedDestinations?: string[];
    installment?: Installment;
    /**
     * Whether the item is a merchant-defined bundle. A bundle is a custom grouping of different products sold by a merchant for a single price.
     */
    isBundle?: boolean;
    /**
     * Shared identifier for all variants of the same product.
     */
    itemGroupId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "`content#product`"
     */
    kind?: string;
    /**
     * Additional URLs of lifestyle images of the item. Used to explicitly identify images that showcase your item in a real-world context. See the Help Center article for more information.
     */
    lifestyleImageLinks?: string[];
    /**
     * URL directly linking to your item's page on your website.
     */
    link?: string;
    /**
     * URL template for merchant hosted local storefront.
     */
    linkTemplate?: string;
    loyaltyPoints?: LoyaltyPoints;
    /**
     * The material of which the item is made.
     */
    material?: string;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.
     */
    maxEnergyEfficiencyClass?: string;
    /**
     * Maximal product handling time (in business days).
     */
    maxHandlingTime?: string;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU.
     */
    minEnergyEfficiencyClass?: string;
    /**
     * Minimal product handling time (in business days).
     */
    minHandlingTime?: string;
    /**
     * URL for the mobile-optimized version of your item's landing page.
     */
    mobileLink?: string;
    /**
     * URL template for merchant hosted local storefront optimized for mobile devices.
     */
    mobileLinkTemplate?: string;
    /**
     * Manufacturer Part Number (MPN) of the item.
     */
    mpn?: string;
    /**
     * The number of identical products in a merchant-defined multipack.
     */
    multipack?: string;
    /**
     * Required. A unique identifier for the item. Leading and trailing whitespaces are stripped and multiple whitespaces are replaced by a single whitespace upon submission. Only valid unicode characters are accepted. See the products feed specification for details. *Note:* Content API methods that operate on products take the REST ID of the product, *not* this identifier.
     */
    offerId?: string;
    /**
     * The item's pattern (for example, polka dots).
     */
    pattern?: string;
    /**
     * Publication of this item should be temporarily paused. Acceptable values are: - "`ads`"
     */
    pause?: string;
    /**
     * The pick up option for the item. Acceptable values are: - "`buy`" - "`reserve`" - "`ship to store`" - "`not supported`"
     */
    pickupMethod?: string;
    /**
     * Item store pickup timeline. Acceptable values are: - "`same day`" - "`next day`" - "`2-day`" - "`3-day`" - "`4-day`" - "`5-day`" - "`6-day`" - "`7-day`" - "`multi-week`"
     */
    pickupSla?: string;
    price?: Price;
    /**
     * Technical specification or additional product details.
     */
    productDetails?: ProductProductDetail[];
    productHeight?: ProductDimension;
    /**
     * Bullet points describing the most relevant highlights of a product.
     */
    productHighlights?: string[];
    productLength?: ProductDimension;
    /**
     * Categories of the item (formatted as in product data specification).
     */
    productTypes?: string[];
    productWeight?: ProductWeight;
    productWidth?: ProductDimension;
    /**
     * The unique ID of a promotion.
     */
    promotionIds?: string[];
    salePrice?: Price;
    /**
     * Date range during which the item is on sale (see product data specification ).
     */
    salePriceEffectiveDate?: string;
    /**
     * The quantity of the product that is available for selling on Google. Supported only for online products.
     */
    sellOnGoogleQuantity?: string;
    /**
     * Shipping rules.
     */
    shipping?: ProductShipping[];
    shippingHeight?: ProductShippingDimension;
    /**
     * The shipping label of the product, used to group product in account-level shipping rules.
     */
    shippingLabel?: string;
    shippingLength?: ProductShippingDimension;
    shippingWeight?: ProductShippingWeight;
    shippingWidth?: ProductShippingDimension;
    /**
     * List of country codes (ISO 3166-1 alpha-2) to exclude the offer from Shopping Ads destination. Countries from this list are removed from countries configured in MC feed settings.
     */
    shoppingAdsExcludedCountries?: string[];
    /**
     * System in which the size is specified. Recommended for apparel items.
     */
    sizeSystem?: string;
    /**
     * The cut of the item. Recommended for apparel items.
     */
    sizeType?: string;
    /**
     * Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition).
     */
    sizes?: string[];
    /**
     * The source of the offer, that is, how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`"
     */
    source?: string;
    subscriptionCost?: ProductSubscriptionCost;
    /**
     * Required. The CLDR territory code for the item's country of sale.
     */
    targetCountry?: string;
    /**
     * The tax category of the product, used to configure detailed tax nexus in account-level tax settings.
     */
    taxCategory?: string;
    /**
     * Tax information.
     */
    taxes?: ProductTax[];
    /**
     * Title of the item.
     */
    title?: string;
    /**
     * The transit time label of the product, used to group product in account-level transit time tables.
     */
    transitTimeLabel?: string;
    unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure;
    unitPricingMeasure?: ProductUnitPricingMeasure;
}
