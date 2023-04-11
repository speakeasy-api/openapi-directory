import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDimension } from "./customdimension";
import { CustomMetric } from "./custommetric";
/**
 * A conversion containing data relevant to DoubleClick Search.
 */
export declare class Conversion extends SpeakeasyBase {
    /**
     * DS ad group ID.
     */
    adGroupId?: string;
    /**
     * DS ad ID.
     */
    adId?: string;
    /**
     * DS advertiser ID.
     */
    advertiserId?: string;
    /**
     * DS agency ID.
     */
    agencyId?: string;
    /**
     * Available to advertisers only after contacting DoubleClick Search customer support.
     */
    attributionModel?: string;
    /**
     * DS campaign ID.
     */
    campaignId?: string;
    /**
     * Sales channel for the product. Acceptable values are: - "`local`": a physical store - "`online`": an online store
     */
    channel?: string;
    /**
     * DS click ID for the conversion.
     */
    clickId?: string;
    /**
     * For offline conversions, advertisers provide this ID. Advertisers can specify any ID that is meaningful to them. Each conversion in a request must specify a unique ID, and the combination of ID and timestamp must be unique amongst all conversions within the advertiser. For online conversions, DS copies the `dsConversionId` or `floodlightOrderId` into this property depending on the advertiser's Floodlight instructions.
     */
    conversionId?: string;
    /**
     * The time at which the conversion was last modified, in epoch millis UTC.
     */
    conversionModifiedTimestamp?: string;
    /**
     * The time at which the conversion took place, in epoch millis UTC.
     */
    conversionTimestamp?: string;
    /**
     * Available to advertisers only after contacting DoubleClick Search customer support.
     */
    countMillis?: string;
    /**
     * DS criterion (keyword) ID.
     */
    criterionId?: string;
    /**
     * The currency code for the conversion's revenue. Should be in ISO 4217 alphabetic (3-char) format.
     */
    currencyCode?: string;
    /**
     * Custom dimensions for the conversion, which can be used to filter data in a report.
     */
    customDimension?: CustomDimension[];
    /**
     * Custom metrics for the conversion.
     */
    customMetric?: CustomMetric[];
    /**
     * Customer ID of a client account in the new Search Ads 360 experience.
     */
    customerId?: string;
    /**
     * The type of device on which the conversion occurred.
     */
    deviceType?: string;
    /**
     * ID that DoubleClick Search generates for each conversion.
     */
    dsConversionId?: string;
    /**
     * DS engine account ID.
     */
    engineAccountId?: string;
    /**
     * The Floodlight order ID provided by the advertiser for the conversion.
     */
    floodlightOrderId?: string;
    /**
     * ID that DS generates and uses to uniquely identify the inventory account that contains the product.
     */
    inventoryAccountId?: string;
    /**
     * The country registered for the Merchant Center feed that contains the product. Use an ISO 3166 code to specify a country.
     */
    productCountry?: string;
    /**
     * DS product group ID.
     */
    productGroupId?: string;
    /**
     * The product ID (SKU).
     */
    productId?: string;
    /**
     * The language registered for the Merchant Center feed that contains the product. Use an ISO 639 code to specify a language.
     */
    productLanguage?: string;
    /**
     * The quantity of this conversion, in millis.
     */
    quantityMillis?: string;
    /**
     * The revenue amount of this `TRANSACTION` conversion, in micros (value multiplied by 1000000, no decimal). For example, to specify a revenue value of "10" enter "10000000" (10 million) in your request.
     */
    revenueMicros?: string;
    /**
     * The numeric segmentation identifier (for example, DoubleClick Search Floodlight activity ID).
     */
    segmentationId?: string;
    /**
     * The friendly segmentation identifier (for example, DoubleClick Search Floodlight activity name).
     */
    segmentationName?: string;
    /**
     * The segmentation type of this conversion (for example, `FLOODLIGHT`).
     */
    segmentationType?: string;
    /**
     * The state of the conversion, that is, either `ACTIVE` or `REMOVED`. Note: state DELETED is deprecated.
     */
    state?: string;
    /**
     * The ID of the local store for which the product was advertised. Applicable only when the channel is "`local`".
     */
    storeId?: string;
    /**
     * The type of the conversion, that is, either `ACTION` or `TRANSACTION`. An `ACTION` conversion is an action by the user that has no monetarily quantifiable value, while a `TRANSACTION` conversion is an action that does have a monetarily quantifiable value. Examples are email list signups (`ACTION`) versus ecommerce purchases (`TRANSACTION`).
     */
    type?: string;
}
