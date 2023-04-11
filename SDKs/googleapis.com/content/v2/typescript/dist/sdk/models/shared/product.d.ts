import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";
import { CustomGroup } from "./customgroup";
import { ErrorT } from "./error";
import { Installment } from "./installment";
import { LoyaltyPoints } from "./loyaltypoints";
import { Price } from "./price";
import { ProductAspect } from "./productaspect";
import { ProductDestination } from "./productdestination";
import { ProductShipping } from "./productshipping";
import { ProductShippingDimension } from "./productshippingdimension";
import { ProductShippingWeight } from "./productshippingweight";
import { ProductTax } from "./producttax";
import { ProductUnitPricingBaseMeasure } from "./productunitpricingbasemeasure";
import { ProductUnitPricingMeasure } from "./productunitpricingmeasure";
/**
 *  Required product attributes are primarily defined by the products data specification. See the Products Data Specification Help Center article for information. Product data. After inserting, updating, or deleting a product, it may take several minutes before changes take effect.
 */
export declare class Product extends SpeakeasyBase {
    /**
     * Additional URLs of images of the item.
     */
    additionalImageLinks?: string[];
    /**
     * Additional categories of the item (formatted as in products data specification).
     */
    additionalProductTypes?: string[];
    /**
     * Should be set to true if the item is targeted towards adults.
     */
    adult?: boolean;
    /**
     * Used to group items in an arbitrary way. Only for CPA%, discouraged otherwise.
     */
    adwordsGrouping?: string;
    /**
     * Similar to adwords_grouping, but only works on CPC.
     */
    adwordsLabels?: string[];
    /**
     * Allows advertisers to override the item URL when the product is shown within the context of Product Ads.
     */
    adwordsRedirect?: string;
    /**
     * Target age group of the item. Acceptable values are: - "`adult`" - "`infant`" - "`kids`" - "`newborn`" - "`toddler`" - "`youngAdult`"
     */
    ageGroup?: string;
    /**
     * Deprecated. Do not use.
     */
    aspects?: ProductAspect[];
    /**
     * Availability status of the item. Acceptable values are: - "`in stock`" - "`out of stock`" - "`preorder`"
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
     * Condition or state of the item. Acceptable values are: - "`new`" - "`refurbished`" - "`used`"
     */
    condition?: string;
    /**
     * Required. The two-letter ISO 639-1 language code for the item.
     */
    contentLanguage?: string;
    costOfGoodsSold?: Price;
    /**
     * A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the feed specification in its generic form (e.g., `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API, such as additional attributes used for Buy on Google (formerly known as Shopping Actions).
     */
    customAttributes?: CustomAttribute[];
    /**
     * A list of custom (merchant-provided) custom attribute groups.
     */
    customGroups?: CustomGroup[];
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
     * Specifies the intended destinations for the product.
     */
    destinations?: ProductDestination[];
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
     * The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`"
     */
    energyEfficiencyClass?: string;
    /**
     * Date on which the item should expire, as specified upon insertion, in ISO 8601 format. The actual expiration date in Google Shopping is exposed in `productstatuses` as `googleExpirationDate` and might be earlier if `expirationDate` is too far in the future.
     */
    expirationDate?: string;
    /**
     * Target gender of the item. Acceptable values are: - "`female`" - "`male`" - "`unisex`"
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
     * The REST ID of the product. Content API methods that operate on products take this as their `productId` parameter. The REST ID for a product is of the form channel:contentLanguage: targetCountry: offerId.
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
     * URL directly linking to your item's page on your website.
     */
    link?: string;
    loyaltyPoints?: LoyaltyPoints;
    /**
     * The material of which the item is made.
     */
    material?: string;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`"
     */
    maxEnergyEfficiencyClass?: string;
    /**
     * Maximal product handling time (in business days).
     */
    maxHandlingTime?: string;
    /**
     * The energy efficiency class as defined in EU directive 2010/30/EU. Acceptable values are: - "`A`" - "`A+`" - "`A++`" - "`A+++`" - "`B`" - "`C`" - "`D`" - "`E`" - "`F`" - "`G`"
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
     * Deprecated.
     */
    onlineOnly?: boolean;
    /**
     * The item's pattern (e.g. polka dots).
     */
    pattern?: string;
    price?: Price;
    /**
     * Your category of the item (formatted as in products data specification).
     */
    productType?: string;
    /**
     * The unique ID of a promotion.
     */
    promotionIds?: string[];
    salePrice?: Price;
    /**
     * Date range during which the item is on sale (see products data specification ).
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
     * System in which the size is specified. Recommended for apparel items. Acceptable values are: - "`AU`" - "`BR`" - "`CN`" - "`DE`" - "`EU`" - "`FR`" - "`IT`" - "`JP`" - "`MEX`" - "`UK`" - "`US`"
     */
    sizeSystem?: string;
    /**
     * The cut of the item. Recommended for apparel items. Acceptable values are: - "`big and tall`" - "`maternity`" - "`oversize`" - "`petite`" - "`plus`" - "`regular`"
     */
    sizeType?: string;
    /**
     * Size of the item. Only one value is allowed. For variants with different sizes, insert a separate product for each size with the same `itemGroupId` value (see size definition).
     */
    sizes?: string[];
    /**
     * The source of the offer, i.e., how the offer was created. Acceptable values are: - "`api`" - "`crawl`" - "`feed`"
     */
    source?: string;
    /**
     * Required. The CLDR territory code for the item.
     */
    targetCountry?: string;
    /**
     * Tax information.
     */
    taxes?: ProductTax[];
    /**
     * Title of the item.
     */
    title?: string;
    unitPricingBaseMeasure?: ProductUnitPricingBaseMeasure;
    unitPricingMeasure?: ProductUnitPricingMeasure;
    /**
     * Deprecated. The read-only list of intended destinations which passed validation.
     */
    validatedDestinations?: string[];
    /**
     * Read-only warnings.
     */
    warnings?: ErrorT[];
}
