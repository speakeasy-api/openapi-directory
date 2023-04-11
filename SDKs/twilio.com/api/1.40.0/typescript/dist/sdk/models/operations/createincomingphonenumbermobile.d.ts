import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateIncomingPhoneNumberMobileServerList: readonly ["https://api.twilio.com"];
export declare class CreateIncomingPhoneNumberMobileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest extends SpeakeasyBase {
    /**
     * The SID of the Address resource we should associate with the new phone number. Some regions require addresses to meet local regulations.
     */
    addressSid?: string;
    /**
     * The API version to use for incoming calls made to the new phone number. The default is `2010-04-01`.
     */
    apiVersion?: string;
    /**
     * The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations.
     */
    bundleSid?: string;
    /**
     * The SID of the emergency address configuration to use for emergency calling from the new phone number.
     */
    emergencyAddressSid?: string;
    emergencyStatus?: shared.IncomingPhoneNumberMobileEnumEmergencyStatusEnum;
    /**
     * A descriptive string that you created to describe the new phone number. It can be up to 64 characters long. By default, the is a formatted version of the phone number.
     */
    friendlyName?: string;
    /**
     * The SID of the Identity resource that we should associate with the new phone number. Some regions require an identity to meet local regulations.
     */
    identitySid?: string;
    /**
     * The phone number to purchase specified in [E.164](https://www.twilio.com/docs/glossary/what-e164) format.  E.164 phone numbers consist of a + followed by the country code and subscriber number without punctuation characters. For example, +14155551234.
     */
    phoneNumber: string;
    /**
     * The SID of the application that should handle SMS messages sent to the new phone number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those of the application.
     */
    smsApplicationSid?: string;
    /**
     * The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    smsFallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    smsMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestSmsMethodEnum;
    /**
     * The URL we should call when the new phone number receives an incoming SMS message.
     */
    smsUrl?: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    statusCallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestStatusCallbackMethodEnum;
    /**
     * The SID of the Trunk we should use to handle calls to the new phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
     */
    trunkSid?: string;
    /**
     * The SID of the application we should use to handle calls to the new phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
     */
    voiceApplicationSid?: string;
    /**
     * Whether to lookup the caller's name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    voiceFallbackMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    voiceMethod?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequestVoiceMethodEnum;
    voiceReceiveMode?: shared.IncomingPhoneNumberMobileEnumVoiceReceiveModeEnum;
    /**
     * The URL that we should call to answer a call to the new phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
     */
    voiceUrl?: string;
}
export declare class CreateIncomingPhoneNumberMobileRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    requestBody?: CreateIncomingPhoneNumberMobileCreateIncomingPhoneNumberMobileRequest;
}
export declare class CreateIncomingPhoneNumberMobileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile?: shared.ApiV2010AccountIncomingPhoneNumberIncomingPhoneNumberMobile;
}
