import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateApplicationServerList: readonly ["https://api.twilio.com"];
export declare class UpdateApplicationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateApplicationUpdateApplicationRequestSmsMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`.
 */
export declare enum UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateApplicationUpdateApplicationRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateApplicationUpdateApplicationRequest extends SpeakeasyBase {
    /**
     * The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is your account's default API version.
     */
    apiVersion?: string;
    /**
     * A descriptive string that you create to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * The URL we should call using a POST method to send message status information to your application.
     */
    messageStatusCallback?: string;
    /**
     * Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`.
     */
    publicApplicationConnectEnabled?: boolean;
    /**
     * The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`.
     */
    smsFallbackMethod?: UpdateApplicationUpdateApplicationRequestSmsFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`.
     */
    smsMethod?: UpdateApplicationUpdateApplicationRequestSmsMethodEnum;
    /**
     * Same as message_status_callback: The URL we should call using a POST method to send status information about SMS messages sent by the application. Deprecated, included for backwards compatibility.
     */
    smsStatusCallback?: string;
    /**
     * The URL we should call when the phone number receives an incoming SMS message.
     */
    smsUrl?: string;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your application.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be: `GET` or `POST`.
     */
    statusCallbackMethod?: UpdateApplicationUpdateApplicationRequestStatusCallbackMethodEnum;
    /**
     * Whether we should look up the caller's caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: UpdateApplicationUpdateApplicationRequestVoiceFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
     */
    voiceMethod?: UpdateApplicationUpdateApplicationRequestVoiceMethodEnum;
    /**
     * The URL we should call when the phone number assigned to this application receives a call.
     */
    voiceUrl?: string;
}
export declare class UpdateApplicationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resources to update.
     */
    accountSid: string;
    requestBody?: UpdateApplicationUpdateApplicationRequest;
    /**
     * The Twilio-provided string that uniquely identifies the Application resource to update.
     */
    sid: string;
}
export declare class UpdateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountApplication?: shared.ApiV2010AccountApplication;
}
