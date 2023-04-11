import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum ApiV2010AccountApplicationSmsFallbackMethodEnum {
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
export declare enum ApiV2010AccountApplicationSmsMethodEnum {
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
export declare enum ApiV2010AccountApplicationStatusCallbackMethodEnum {
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
export declare enum ApiV2010AccountApplicationVoiceFallbackMethodEnum {
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
export declare enum ApiV2010AccountApplicationVoiceMethodEnum {
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
export declare class ApiV2010AccountApplication extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Application resource.
     */
    accountSid?: string;
    /**
     * The API version used to start a new TwiML session.
     */
    apiVersion?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The URL we call using a POST method to send message status information to your application.
     */
    messageStatusCallback?: string;
    /**
     * Whether to allow other Twilio accounts to dial this applicaton using Dial verb. Can be: `true` or `false`.
     */
    publicApplicationConnectEnabled?: boolean;
    /**
     * The unique string that that we created to identify the Application resource.
     */
    sid?: string;
    /**
     * The HTTP method we use to call `sms_fallback_url`. Can be: `GET` or `POST`.
     */
    smsFallbackMethod?: ApiV2010AccountApplicationSmsFallbackMethodEnum;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML from `sms_url`.
     */
    smsFallbackUrl?: string;
    /**
     * The HTTP method we use to call `sms_url`. Can be: `GET` or `POST`.
     */
    smsMethod?: ApiV2010AccountApplicationSmsMethodEnum;
    /**
     * The URL we call using a POST method to send status information to your application about SMS messages that refer to the application.
     */
    smsStatusCallback?: string;
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
    statusCallbackMethod?: ApiV2010AccountApplicationStatusCallbackMethodEnum;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
    /**
     * Whether we look up the caller's caller-ID name from the CNAM database (additional charges apply). Can be: `true` or `false`.
     */
    voiceCallerIdLookup?: boolean;
    /**
     * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: ApiV2010AccountApplicationVoiceFallbackMethodEnum;
    /**
     * The URL that we call when an error occurs retrieving or executing the TwiML requested by `url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
     */
    voiceMethod?: ApiV2010AccountApplicationVoiceMethodEnum;
    /**
     * The URL we call when the phone number assigned to this application receives a call.
     */
    voiceUrl?: string;
}
