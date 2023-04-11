import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionFeaturedProduct } from "./collectionfeaturedproduct";
/**
 * The collection message.
 */
export declare class Collection extends SpeakeasyBase {
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns. [Custom label](https://support.google.com/merchants/answer/9674217)
     */
    customLabel0?: string;
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.
     */
    customLabel1?: string;
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.
     */
    customLabel2?: string;
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.
     */
    customLabel3?: string;
    /**
     * Label that you assign to a collection to help organize bidding and reporting in Shopping campaigns.
     */
    customLabel4?: string;
    /**
     * This identifies one or more products associated with the collection. Used as a lookup to the corresponding product ID in your product feeds. Provide a maximum of 100 featuredProduct (for collections). Provide up to 10 featuredProduct (for Shoppable Images only) with ID and X and Y coordinates. [featured_product attribute](https://support.google.com/merchants/answer/9703736)
     */
    featuredProduct?: CollectionFeaturedProduct[];
    /**
     * Your collection's name. [headline attribute](https://support.google.com/merchants/answer/9673580)
     */
    headline?: string[];
    /**
     * Required. The REST ID of the collection. Content API methods that operate on collections take this as their collectionId parameter. The REST ID for a collection is of the form collectionId. [id attribute](https://support.google.com/merchants/answer/9649290)
     */
    id?: string;
    /**
     * The URL of a collection’s image. [image_link attribute](https://support.google.com/merchants/answer/9703236)
     */
    imageLink?: string[];
    /**
     * The language of a collection and the language of any featured products linked to the collection. [language attribute](https://support.google.com/merchants/answer/9673781)
     */
    language?: string;
    /**
     * A collection’s landing page. URL directly linking to your collection's page on your website. [link attribute](https://support.google.com/merchants/answer/9673983)
     */
    link?: string;
    /**
     * A collection’s mobile-optimized landing page when you have a different URL for mobile and desktop traffic. [mobile_link attribute](https://support.google.com/merchants/answer/9646123)
     */
    mobileLink?: string;
    /**
     * [product_country attribute](https://support.google.com/merchants/answer/9674155)
     */
    productCountry?: string;
}
