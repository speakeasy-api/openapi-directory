import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The capabilities of the short code.
 */
export declare class ProxyV1ServiceShortCodeCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
/**
 * Created
 */
export declare class ProxyV1ServiceShortCode extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the ShortCode resource.
     */
    accountSid?: string;
    /**
     * The capabilities of the short code.
     */
    capabilities?: ProxyV1ServiceShortCodeCapabilities;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was created.
     */
    dateCreated?: Date;
    /**
     * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) date and time in GMT when the resource was last updated.
     */
    dateUpdated?: Date;
    /**
     * Whether the short code should be reserved and not be assigned to a participant using proxy pool logic. See [Reserved Phone Numbers](https://www.twilio.com/docs/proxy/reserved-phone-numbers) for more information.
     */
    isReserved?: boolean;
    /**
     * The ISO Country Code for the short code.
     */
    isoCountry?: string;
    /**
     * The SID of the ShortCode resource's parent [Service](https://www.twilio.com/docs/proxy/api/service) resource.
     */
    serviceSid?: string;
    /**
     * The short code's number.
     */
    shortCode?: string;
    /**
     * The unique string that we created to identify the ShortCode resource.
     */
    sid?: string;
    /**
     * The absolute URL of the ShortCode resource.
     */
    url?: string;
}
