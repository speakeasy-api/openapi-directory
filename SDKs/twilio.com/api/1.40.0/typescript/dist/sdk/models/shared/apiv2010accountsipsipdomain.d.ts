import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum {
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
export declare enum ApiV2010AccountSipSipDomainVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we use to call `voice_status_callback_url`. Either `GET` or `POST`.
 */
export declare enum ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum {
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
export declare class ApiV2010AccountSipSipDomain extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resource.
     */
    accountSid?: string;
    /**
     * The API version used to process the call.
     */
    apiVersion?: string;
    /**
     * The types of authentication you have mapped to your domain. Can be: `IP_ACL` and `CREDENTIAL_LIST`. If you have both defined for your domain, both will be returned in a comma delimited string. If `auth_type` is not defined, the domain will not be able to receive any traffic.
     */
    authType?: string;
    /**
     * The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with.
     */
    byocTrunkSid?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * The unique address you reserve on Twilio to which you route your SIP traffic. Domain names can contain letters, digits, and "-" and must end with `sip.twilio.com`.
     */
    domainName?: string;
    /**
     * Whether an emergency caller sid is configured for the domain. If present, this phone number will be used as the callback for the emergency call.
     */
    emergencyCallerSid?: string;
    /**
     * Whether emergency calling is enabled for the domain. If enabled, allows emergency calls on the domain from phone numbers with validated addresses.
     */
    emergencyCallingEnabled?: boolean;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain.
     */
    secure?: boolean;
    /**
     * The unique string that that we created to identify the SipDomain resource.
     */
    sid?: string;
    /**
     * Whether to allow SIP Endpoints to register with the domain to receive calls.
     */
    sipRegistration?: boolean;
    /**
     * A list of mapping resources associated with the SIP Domain resource identified by their relative URIs.
     */
    subresourceUris?: Record<string, any>;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
    /**
     * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: ApiV2010AccountSipSipDomainVoiceFallbackMethodEnum;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML requested from `voice_url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
     */
    voiceMethod?: ApiV2010AccountSipSipDomainVoiceMethodEnum;
    /**
     * The HTTP method we use to call `voice_status_callback_url`. Either `GET` or `POST`.
     */
    voiceStatusCallbackMethod?: ApiV2010AccountSipSipDomainVoiceStatusCallbackMethodEnum;
    /**
     * The URL that we call to pass status parameters (such as call ended) to your application.
     */
    voiceStatusCallbackUrl?: string;
    /**
     * The URL we call using the `voice_method` when the domain receives a call.
     */
    voiceUrl?: string;
}
