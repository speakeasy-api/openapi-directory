import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { ProductViewItemIssue } from "./productviewitemissue";
/**
 * Aggregated destination status.
 */
export declare enum ProductViewAggregatedDestinationStatusEnum {
    AggregatedStatusUnspecified = "AGGREGATED_STATUS_UNSPECIFIED",
    NotEligibleOrDisapproved = "NOT_ELIGIBLE_OR_DISAPPROVED",
    Pending = "PENDING",
    EligibleLimited = "ELIGIBLE_LIMITED",
    Eligible = "ELIGIBLE"
}
/**
 * Channel of the product (online versus local).
 */
export declare enum ProductViewChannelEnum {
    ChannelUnspecified = "CHANNEL_UNSPECIFIED",
    Local = "LOCAL",
    Online = "ONLINE"
}
/**
 * Product fields. Values are only set for fields requested explicitly in the request's search query.
 */
export declare class ProductView extends SpeakeasyBase {
    /**
     * Aggregated destination status.
     */
    aggregatedDestinationStatus?: ProductViewAggregatedDestinationStatusEnum;
    /**
     * Availability of the product.
     */
    availability?: string;
    /**
     * Brand of the product.
     */
    brand?: string;
    /**
     * First level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL1?: string;
    /**
     * Second level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL2?: string;
    /**
     * Third level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL3?: string;
    /**
     * Fourth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL4?: string;
    /**
     * Fifth level of the product category in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    categoryL5?: string;
    /**
     * Channel of the product (online versus local).
     */
    channel?: ProductViewChannelEnum;
    /**
     * Condition of the product.
     */
    condition?: string;
    /**
     * The time the merchant created the product in timestamp seconds.
     */
    creationTime?: string;
    /**
     * Product price currency code (for example, ISO 4217). Absent if product price is not available.
     */
    currencyCode?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    expirationDate?: Date;
    /**
     * GTIN of the product.
     */
    gtin?: string[];
    /**
     * The REST ID of the product, in the form of channel:contentLanguage:targetCountry:offerId. Content API methods that operate on products take this as their productId parameter. Should always be included in the SELECT clause.
     */
    id?: string;
    /**
     * Item group ID provided by the merchant for grouping variants together.
     */
    itemGroupId?: string;
    /**
     * List of item issues for the product.
     */
    itemIssues?: ProductViewItemIssue[];
    /**
     * Language code of the product in BCP 47 format.
     */
    languageCode?: string;
    /**
     * Merchant-provided id of the product.
     */
    offerId?: string;
    /**
     * Product price specified as micros (1 millionth of a standard unit, 1 USD = 1000000 micros) in the product currency. Absent in case the information about the price of the product is not available.
     */
    priceMicros?: string;
    /**
     * First level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL1?: string;
    /**
     * Second level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL2?: string;
    /**
     * Third level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL3?: string;
    /**
     * Fourth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL4?: string;
    /**
     * Fifth level of the product type in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324436).
     */
    productTypeL5?: string;
    /**
     * The normalized shipping label specified in the feed
     */
    shippingLabel?: string;
    /**
     * Title of the product.
     */
    title?: string;
}
