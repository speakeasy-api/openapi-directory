import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerPostalAddress } from "./customerpostaladdress";
/**
 * Successful response
 */
export declare class Customer extends SpeakeasyBase {
    /**
     * The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain`
     */
    alternateEmail?: string;
    /**
     * The customer's creation time (Readonly)
     */
    customerCreationTime?: Date;
    /**
     * The customer's primary domain name string. Do not include the `www` prefix when creating a new customer.
     */
    customerDomain?: string;
    /**
     * ETag of the resource.
     */
    etag?: string;
    /**
     * The unique ID for the customer's Google Workspace account. (Readonly)
     */
    id?: string;
    /**
     * Identifies the resource as a customer. Value: `admin#directory#customer`
     */
    kind?: string;
    /**
     * The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`.
     */
    language?: string;
    /**
     * The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     */
    phoneNumber?: string;
    postalAddress?: CustomerPostalAddress;
}
