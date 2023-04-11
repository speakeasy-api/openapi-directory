import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capabilities of the phone number.
 */
export declare class ProxyV1ServicePhoneNumberCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
/**
 * Created
 */
export declare class ProxyV1ServicePhoneNumber extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PhoneNumber resource.
     */
    accountSid?: string;
    /**
     * The capabilities of the phone number.
     */
    capabilities?: ProxyV1ServicePhoneNumberCapabilities;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
     */
    dateCreated?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The number of open session assigned to the number. See the [How many Phone Numbers do I need?](https://www.twilio.com/docs/proxy/phone-numbers-needed) guide for more information.
     */
    inUse?: number;
    /**
     * Whether the phone number should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
     */
    isReserved?: boolean;
    /**
     * The ISO Country Code for the phone number.
     */
    isoCountry?: string;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber?: string;
    /**
     * The SID of the PhoneNumber resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
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
