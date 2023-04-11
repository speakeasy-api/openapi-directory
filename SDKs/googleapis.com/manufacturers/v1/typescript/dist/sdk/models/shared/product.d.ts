import { SpeakeasyBase } from "../../../internal/utils";
import { Attributes } from "./attributes";
import { DestinationStatus } from "./destinationstatus";
import { Issue } from "./issue";
/**
 * Product data.
 */
export declare class Product extends SpeakeasyBase {
    /**
     * Attributes of the product. For more information, see https://support.google.com/manufacturers/answer/6124116.
     */
    attributes?: Attributes;
    /**
     * The content language of the product as a two-letter ISO 639-1 language code (for example, en).
     */
    contentLanguage?: string;
    /**
     * The status of the destinations.
     */
    destinationStatuses?: DestinationStatus[];
    /**
     * A server-generated list of issues associated with the product.
     */
    issues?: Issue[];
    /**
     * Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
     */
    name?: string;
    /**
     * Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
     */
    parent?: string;
    /**
     * The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
     */
    productId?: string;
    /**
     * The target country of the product as a CLDR territory code (for example, US).
     */
    targetCountry?: string;
}
