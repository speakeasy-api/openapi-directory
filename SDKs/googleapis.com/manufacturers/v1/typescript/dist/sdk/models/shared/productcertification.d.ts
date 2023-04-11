import { SpeakeasyBase } from "../../../internal/utils";
import { Certification } from "./certification";
import { DestinationStatus } from "./destinationstatus";
import { Issue } from "./issue";
/**
 * Product certification data.
 */
export declare class ProductCertificationInput extends SpeakeasyBase {
    /**
     * Required. This is the product's brand name. The brand is used to help identify your product.
     */
    brand?: string;
    /**
     * Required. A list of certifications to link to the described product.
     */
    certification?: Certification[];
    /**
     * Optional. A 2-letter country code (ISO 3166-1 Alpha 2).
     */
    countryCode?: string[];
    /**
     * Optional. These are the Manufacturer Part Numbers (MPN). MPNs are used to uniquely identify a specific product among all products from the same manufacturer
     */
    mpn?: string[];
    /**
     * Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637.
     */
    name?: string;
    /**
     * Optional. Another name for GTIN.
     */
    productCode?: string[];
    /**
     * Optional. These are your own product categorization system in your product data.
     */
    productType?: string[];
    /**
     * Required. This is to clearly identify the product you are certifying.
     */
    title?: string;
}
/**
 * Product certification data.
 */
export declare class ProductCertification extends SpeakeasyBase {
    /**
     * Required. This is the product's brand name. The brand is used to help identify your product.
     */
    brand?: string;
    /**
     * Required. A list of certifications to link to the described product.
     */
    certification?: Certification[];
    /**
     * Optional. A 2-letter country code (ISO 3166-1 Alpha 2).
     */
    countryCode?: string[];
    /**
     * Output only. The statuses of the destinations.
     */
    destinationStatuses?: DestinationStatus[];
    /**
     * Output only. A server-generated list of issues associated with the product.
     */
    issues?: Issue[];
    /**
     * Optional. These are the Manufacturer Part Numbers (MPN). MPNs are used to uniquely identify a specific product among all products from the same manufacturer
     */
    mpn?: string[];
    /**
     * Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637.
     */
    name?: string;
    /**
     * Optional. Another name for GTIN.
     */
    productCode?: string[];
    /**
     * Optional. These are your own product categorization system in your product data.
     */
    productType?: string[];
    /**
     * Required. This is to clearly identify the product you are certifying.
     */
    title?: string;
}
