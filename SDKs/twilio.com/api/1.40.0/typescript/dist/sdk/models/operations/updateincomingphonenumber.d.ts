import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateIncomingPhoneNumberServerList: readonly ["https://api.twilio.com"];
export declare class UpdateIncomingPhoneNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum {
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
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum {
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
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum {
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
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum {
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
export declare enum UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resource to update.  For more information, see [Exchanging Numbers Between Subaccounts](https://www.twilio.com/docs/iam/api/subaccounts#exchanging-numbers).
     */
    accountSid?: string;
    /**
     * The SID of the Address resource we should associate with the phone number. Some regions require addresses to meet local regulations.
     */
    addressSid?: string;
    /**
     * The API version to use for incoming calls made to the phone number. The default is `2010-04-01`.
     */
    apiVersion?: string;
    /**
     * The SID of the Bundle resource that you associate with the phone number. Some regions require a Bundle to meet local Regulations.
     */
    bundleSid?: string;
    /**
     * The SID of the emergency address configuration to use for emergency calling from this phone number.
     */
    emergencyAddressSid?: string;
    emergencyStatus?: shared.IncomingPhoneNumberEnumEmergencyStatusEnum;
    /**
     * A descriptive string that you created to describe this phone number. It can be up to 64 characters long. By default, this is a formatted version of the phone number.
     */
    friendlyName?: string;
    /**
     * The SID of the Identity resource that we should associate with the phone number. Some regions require an identity to meet local regulations.
     */
    identitySid?: string;
    /**
     * The SID of the application that should handle SMS messages sent to the number. If an `sms_application_sid` is present, we ignore all of the `sms_*_url` urls and use those set on the application.
     */
    smsApplicationSid?: string;
    /**
     * The HTTP method that we should use to call `sms_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    smsFallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs while requesting or executing the TwiML defined by `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method that we should use to call `sms_url`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    smsMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestSmsMethodEnum;
    /**
     * The URL we should call when the phone number receives an incoming SMS message.
     */
    smsUrl?: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    statusCallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestStatusCallbackMethodEnum;
    /**
     * The SID of the Trunk we should use to handle phone calls to the phone number. If a `trunk_sid` is present, we ignore all of the voice urls and voice applications and use only those set on the Trunk. Setting a `trunk_sid` will automatically delete your `voice_application_sid` and vice versa.
     */
    trunkSid?: string;
    /**
     * The SID of the application we should use to handle phone calls to the phone number. If a `voice_application_sid` is present, we ignore all of the voice urls and use only those set on the application. Setting a `voice_application_sid` will automatically delete your `trunk_sid` and vice versa.
     */
    voiceApplicationSid?: string;
    /**
     * Whether to lookup the caller's name from the CNAM database and post it to your app. Can be: `true` or `false` and defaults to `false`.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method that we should use to call `voice_fallback_url`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    voiceFallbackMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method that we should use to call `voice_url`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    voiceMethod?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequestVoiceMethodEnum;
    voiceReceiveMode?: shared.IncomingPhoneNumberEnumVoiceReceiveModeEnum;
    /**
     * The URL that we should call to answer a call to the phone number. The `voice_url` will not be called if a `voice_application_sid` or a `trunk_sid` is set.
     */
    voiceUrl?: string;
}
export declare class UpdateIncomingPhoneNumberRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the IncomingPhoneNumber resource to update.  For more information, see [Exchanging Numbers Between Subaccounts](https://www.twilio.com/docs/iam/api/subaccounts#exchanging-numbers).
     */
    accountSid: string;
    requestBody?: UpdateIncomingPhoneNumberUpdateIncomingPhoneNumberRequest;
    /**
     * The Twilio-provided string that uniquely identifies the IncomingPhoneNumber resource to update.
     */
    sid: string;
}
export declare class UpdateIncomingPhoneNumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountIncomingPhoneNumber?: shared.ApiV2010AccountIncomingPhoneNumber;
}
