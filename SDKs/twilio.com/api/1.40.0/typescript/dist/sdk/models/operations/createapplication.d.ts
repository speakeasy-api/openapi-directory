import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateApplicationServerList: readonly ["https://api.twilio.com"];
export declare class CreateApplicationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum {
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
export declare enum CreateApplicationCreateApplicationRequestSmsMethodEnum {
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
export declare enum CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum {
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
export declare enum CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum {
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
export declare enum CreateApplicationCreateApplicationRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateApplicationCreateApplicationRequest extends SpeakeasyBase {
    /**
     * The API version to use to start a new TwiML session. Can be: `2010-04-01` or `2008-08-01`. The default value is the account's default API version.
     */
    apiVersion?: string;
    /**
     * A descriptive string that you create to describe the new application. It can be up to 64 characters long.
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
    smsFallbackMethod?: CreateApplicationCreateApplicationRequestSmsFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs while retrieving or executing the TwiML from `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method we should use to call `sms_url`. Can be: `GET` or `POST`.
     */
    smsMethod?: CreateApplicationCreateApplicationRequestSmsMethodEnum;
    /**
     * The URL we should call using a POST method to send status information about SMS messages sent by the application.
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
    statusCallbackMethod?: CreateApplicationCreateApplicationRequestStatusCallbackMethodEnum;
    /**
     * Whether we should look up the caller's caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: CreateApplicationCreateApplicationRequestVoiceFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs retrieving or executing the TwiML requested by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we should use to call `voice_url`. Can be: `GET` or `POST`.
     */
    voiceMethod?: CreateApplicationCreateApplicationRequestVoiceMethodEnum;
    /**
     * The URL we should call when the phone number assigned to this application receives a call.
     */
    voiceUrl?: string;
}
export declare class CreateApplicationRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that will create the resource.
     */
    accountSid: string;
    requestBody?: CreateApplicationCreateApplicationRequest;
}
export declare class CreateApplicationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    apiV2010AccountApplication?: shared.ApiV2010AccountApplication;
}
