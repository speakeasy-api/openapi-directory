import { SpeakeasyBase } from "../../../internal/utils";
import { DependentPhoneNumberEnumAddressRequirementEnum } from "./dependentphonenumberenumaddressrequirementenum";
import { DependentPhoneNumberEnumEmergencyStatusEnum } from "./dependentphonenumberenumemergencystatusenum";
/**
 * The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum {
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
export declare enum ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum {
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
export declare enum ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum {
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
export declare enum ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class ApiV2010AccountAddressDependentPhoneNumber extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the DependentPhoneNumber resource.
     */
    accountSid?: string;
    addressRequirements?: DependentPhoneNumberEnumAddressRequirementEnum;
    /**
     * The API version used to start a new TwiML session.
     */
    apiVersion?: string;
    /**
     * The set of Boolean properties that indicates whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
     */
    capabilities?: any;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The SID of the emergency address configuration that we use for emergency calling from the phone number.
     */
    emergencyAddressSid?: string;
    emergencyStatus?: DependentPhoneNumberEnumEmergencyStatusEnum;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber?: string;
    /**
     * The unique string that that we created to identify the DependentPhoneNumber resource.
     */
    sid?: string;
    /**
     * The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application.
     */
    smsApplicationSid?: string;
    /**
     * The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
     */
    smsFallbackMethod?: ApiV2010AccountAddressDependentPhoneNumberSmsFallbackMethodEnum;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
     */
    smsMethod?: ApiV2010AccountAddressDependentPhoneNumberSmsMethodEnum;
    /**
     * The URL we call when the phone number receives an incoming SMS message.
     */
    smsUrl?: string;
    /**
     * The URL we call using the `status_callback_method` to send status information to your application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
     */
    statusCallbackMethod?: ApiV2010AccountAddressDependentPhoneNumberStatusCallbackMethodEnum;
    /**
     * The SID of the Trunk that handles calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
     */
    trunkSid?: string;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
    /**
     * The SID of the application that handles calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
     */
    voiceApplicationSid?: string;
    /**
     * Whether we look up the caller's caller-ID name from the CNAM database. Can be: `true` or `false`. Caller ID lookups can cost $0.01 each.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: ApiV2010AccountAddressDependentPhoneNumberVoiceFallbackMethodEnum;
    /**
     * The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
     */
    voiceMethod?: ApiV2010AccountAddressDependentPhoneNumberVoiceMethodEnum;
    /**
     * The URL we call when the phone number receives a call. The `voice_url` will not be used if a `voice_application_sid` or a `trunk_sid` is set.
     */
    voiceUrl?: string;
}
