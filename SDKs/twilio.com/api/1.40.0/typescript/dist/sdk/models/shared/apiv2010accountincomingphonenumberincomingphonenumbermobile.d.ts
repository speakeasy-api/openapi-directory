import { SpeakeasyBase } from "../../../internal/utils";
import { IncomingPhoneNumberMobileEnumAddressRequirementEnum } from "./incomingphonenumbermobileenumaddressrequirementenum";
import { IncomingPhoneNumberMobileEnumEmergencyAddressStatusEnum } from "./incomingphonenumbermobileenumemergencyaddressstatusenum";
import { IncomingPhoneNumberMobileEnumEmergencyStatusEnum } from "./incomingphonenumbermobileenumemergencystatusenum";
import { IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum } from "./incomingphonenumbermobileenumvoicereceivemodeenum";
/**
 * The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
 */
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities extends SpeakeasyBase {
    fax?: boolean;
    mms?: boolean;
    sms?: boolean;
    voice?: boolean;
}
/**
 * The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum {
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
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum {
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
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum {
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
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum {
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
export declare enum ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum {
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
export declare class ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the resource.
     */
    accountSid?: string;
    addressRequirements?: IncomingPhoneNumberMobileEnumAddressRequirementEnum;
    /**
     * The SID of the Address resource associated with the phone number.
     */
    addressSid?: string;
    /**
     * The API version used to start a new TwiML session.
     */
    apiVersion?: string;
    /**
     * Whether the phone number is new to the Twilio platform. Can be: `true` or `false`.
     */
    beta?: boolean;
    /**
     * The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations.
     */
    bundleSid?: string;
    /**
     * The set of Boolean properties that indicate whether a phone number can receive calls or messages.  Capabilities are  `Voice`, `SMS`, and `MMS` and each capability can be: `true` or `false`.
     */
    capabilities?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileCapabilities;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The SID of the emergency address configuration that we use for emergency calling from this phone number.
     */
    emergencyAddressSid?: string;
    emergencyAddressStatus?: IncomingPhoneNumberMobileEnumEmergencyAddressStatusEnum;
    emergencyStatus?: IncomingPhoneNumberMobileEnumEmergencyStatusEnum;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The SID of the Identity resource that we associate with the phone number. Some regions require an Identity to meet local regulations.
     */
    identitySid?: string;
    /**
     * The phone number's origin. `twilio` identifies Twilio-owned phone numbers and `hosted` identifies hosted phone numbers.
     */
    origin?: string;
    /**
     * The phone number in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, which consists of a + followed by the country code and subscriber number.
     */
    phoneNumber?: string;
    /**
     * The unique string that that we created to identify the resource.
     */
    sid?: string;
    /**
     * The SID of the application that handles SMS messages sent to the phone number. If an `sms_application_sid` is present, we ignore all `sms_*_url` values and use those of the application.
     */
    smsApplicationSid?: string;
    /**
     * The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
     */
    smsFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsFallbackMethodEnum;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
     */
    smsMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileSmsMethodEnum;
    /**
     * The URL we call when the phone number receives an incoming SMS message.
     */
    smsUrl?: string;
    status?: string;
    /**
     * The URL we call using the `status_callback_method` to send status information to your application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we use to call `status_callback`. Can be: `GET` or `POST`.
     */
    statusCallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileStatusCallbackMethodEnum;
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
     * Whether we look up the caller's caller-ID name from the CNAM database ($0.01 per look up). Can be: `true` or `false`.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceFallbackMethodEnum;
    /**
     * The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
     */
    voiceMethod?: ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobileVoiceMethodEnum;
    voiceReceiveMode?: IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum;
    /**
     * The URL we call when the phone number receives a call. The `voice_url` will not be used if a `voice_application_sid` or a `trunk_sid` is set.
     */
    voiceUrl?: string;
}
