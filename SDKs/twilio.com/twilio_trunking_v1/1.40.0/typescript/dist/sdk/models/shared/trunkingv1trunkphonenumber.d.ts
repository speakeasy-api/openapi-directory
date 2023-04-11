import { SpeakeasyBase } from "../../../internal/utils";
import { PhoneNumberEnumAddressRequirementEnum } from "./phonenumberenumaddressrequirementenum";
/**
 * The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
 */
export declare enum TrunkingV1TrunkPhoneNumberSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
 */
export declare enum TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method that we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
 */
export declare enum TrunkingV1TrunkPhoneNumberVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Created
 */
export declare class TrunkingV1TrunkPhoneNumber extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the PhoneNumber resource.
     */
    accountSid?: string;
    addressRequirements?: PhoneNumberEnumAddressRequirementEnum;
    /**
     * The API version used to start a new TwiML session.
     */
    apiVersion?: string;
    /**
     * Whether the phone number is new to the Twilio platform. Can be: `true` or `false`.
     */
    beta?: boolean;
    /**
     * The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
     */
    capabilities?: Record<string, any>;
    /**
     * The date and time in GMT when the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber?: string;
    /**
     * The unique string that we created to identify the PhoneNumber resource.
     */
    sid?: string;
    /**
     * The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application.
     */
    smsApplicationSid?: string;
    /**
     * The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
     */
    smsFallbackMethod?: TrunkingV1TrunkPhoneNumberSmsFallbackMethodEnum;
    /**
     * The URL that we call using the `sms_fallback_method` when an error occurs while retrieving or executing the TwiML from `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
     */
    smsMethod?: TrunkingV1TrunkPhoneNumberSmsMethodEnum;
    /**
     * The URL we call using the `sms_method` when the phone number receives an incoming SMS message.
     */
    smsUrl?: string;
    /**
     * The URL we call using the `status_callback_method` to send status information to your application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
     */
    statusCallbackMethod?: TrunkingV1TrunkPhoneNumberStatusCallbackMethodEnum;
    /**
     * The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice URLs and voice applications and use those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
     */
    trunkSid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * The SID of the application that handles calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice URLs and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
     */
    voiceApplicationSid?: string;
    /**
     * Whether we look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Can be: `true` or `false`.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method that we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: TrunkingV1TrunkPhoneNumberVoiceFallbackMethodEnum;
    /**
     * The URL that we call using the `voice_fallback_method` when an error occurs retrieving or executing the TwiML requested by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
     */
    voiceMethod?: TrunkingV1TrunkPhoneNumberVoiceMethodEnum;
    /**
     * The URL we call using the `voice_method` when the phone number receives a call. The `voice_url` is not be used if a `voice_application_sid` or a `trunk_sid` is set.
     */
    voiceUrl?: string;
}
