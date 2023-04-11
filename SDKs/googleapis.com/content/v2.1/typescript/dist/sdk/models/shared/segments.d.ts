import { SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
/**
 * Program to which metrics apply, for example, Free Product Listing.
 */
export declare enum SegmentsProgramEnum {
    ProgramUnspecified = "PROGRAM_UNSPECIFIED",
    ShoppingAds = "SHOPPING_ADS",
    FreeProductListing = "FREE_PRODUCT_LISTING",
    FreeLocalProductListing = "FREE_LOCAL_PRODUCT_LISTING",
    BuyOnGoogleListing = "BUY_ON_GOOGLE_LISTING"
}
/**
 * Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.
 */
export declare class Segments extends SpeakeasyBase {
    /**
     * Brand of the product.
     */
    brand?: string;
    /**
     * [Product category (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL1?: string;
    /**
     * [Product category (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL2?: string;
    /**
     * [Product category (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL3?: string;
    /**
     * [Product category (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL4?: string;
    /**
     * [Product category (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google's product taxonomy.
     */
    categoryL5?: string;
    /**
     * Currency in which price metrics are represented, for example, if you select `ordered_item_sales_micros`, the returned value will be represented by this currency.
     */
    currencyCode?: string;
    /**
     * Custom label 0 for custom grouping of products.
     */
    customLabel0?: string;
    /**
     * Custom label 1 for custom grouping of products.
     */
    customLabel1?: string;
    /**
     * Custom label 2 for custom grouping of products.
     */
    customLabel2?: string;
    /**
     * Custom label 3 for custom grouping of products.
     */
    customLabel3?: string;
    /**
     * Custom label 4 for custom grouping of products.
     */
    customLabel4?: string;
    /**
     * Code of the country where the customer is located at the time of the event. Represented in the ISO 3166 format. If the customer country cannot be determined, a special 'ZZ' code is returned.
     */
    customerCountryCode?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    date?: Date;
    /**
     * Merchant-provided id of the product.
     */
    offerId?: string;
    /**
     * [Product type (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL1?: string;
    /**
     * [Product type (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL2?: string;
    /**
     * [Product type (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL3?: string;
    /**
     * [Product type (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL4?: string;
    /**
     * [Product type (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant's own product taxonomy.
     */
    productTypeL5?: string;
    /**
     * Program to which metrics apply, for example, Free Product Listing.
     */
    program?: SegmentsProgramEnum;
    /**
     * Title of the product.
     */
    title?: string;
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    week?: Date;
}
