import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HTTP method we use to call the `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum ApiV2010AccountShortCodeSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we use to call the `sms_url`. Can be: `GET` or `POST`.
 */
export declare enum ApiV2010AccountShortCodeSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * OK
 */
export declare class ApiV2010AccountShortCode extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created this ShortCode resource.
     */
    accountSid?: string;
    /**
     * The API version used to start a new TwiML session when an SMS message is sent to this short code.
     */
    apiVersion?: string;
    /**
     * The date and time in GMT that this resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that this resource was last updated, specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * A string that you assigned to describe this resource. By default, the `FriendlyName` is the short code.
     */
    friendlyName?: string;
    /**
     * The short code. e.g., 894546.
     */
    shortCode?: string;
    /**
     * The unique string that that we created to identify this ShortCode resource.
     */
    sid?: string;
    /**
     * The HTTP method we use to call the `sms_fallback_url`. Can be: `GET` or `POST`.
     */
    smsFallbackMethod?: ApiV2010AccountShortCodeSmsFallbackMethodEnum;
    /**
     * The URL that we call if an error occurs while retrieving or executing the TwiML from `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method we use to call the `sms_url`. Can be: `GET` or `POST`.
     */
    smsMethod?: ApiV2010AccountShortCodeSmsMethodEnum;
    /**
     * The URL we call when receiving an incoming SMS message to this short code.
     */
    smsUrl?: string;
    /**
     * The URI of this resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
