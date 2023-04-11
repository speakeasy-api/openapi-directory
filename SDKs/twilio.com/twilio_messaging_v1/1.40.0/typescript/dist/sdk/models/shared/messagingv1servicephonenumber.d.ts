import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Created
 */
export declare class MessagingV1ServicePhoneNumber extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PhoneNumber resource.
     */
    accountSid?: string;
    /**
     * An array of values that describe whether the number can receive calls or messages. Can be: `Voice`, `SMS`, and `MMS`.
     */
    capabilities?: string[];
    /**
     * The 2-character [ISO Country Code](https://www.iso.org/iso-3166-country-codes.html) of the number.
     */
    countryCode?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber?: string;
    /**
     * The SID of the [Service](https://www.twilio.com/docs/chat/rest/service-resource) the resource is associated with.
     */
    serviceSid?: string;
    /**
     * The unique string that we created to identify the PhoneNumber resource.
     */
    sid?: string;
    /**
     * The absolute URL of the PhoneNumber resource.
     */
    url?: string;
}
