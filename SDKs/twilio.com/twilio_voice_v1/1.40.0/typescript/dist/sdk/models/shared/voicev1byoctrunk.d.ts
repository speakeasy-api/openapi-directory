import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The HTTP method we use to call `status_callback_url`. Either `GET` or `POST`.
 */
export declare enum VoiceV1ByocTrunkStatusCallbackMethodEnum {
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
export declare enum VoiceV1ByocTrunkVoiceFallbackMethodEnum {
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
export declare enum VoiceV1ByocTrunkVoiceMethodEnum {
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
export declare class VoiceV1ByocTrunk extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the BYOC Trunk resource.
     */
    accountSid?: string;
    /**
     * Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the BYOC Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
     */
    cnamLookupEnabled?: boolean;
    /**
     * The SID of the Connection Policy that Twilio will use when routing traffic to your communications infrastructure.
     */
    connectionPolicySid?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: Date;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * The SID of the SIP Domain that should be used in the `From` header of originating calls sent to your SIP infrastructure. If your SIP infrastructure allows users to "call back" an incoming call, configure this with a [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper routing. If not configured, the from domain will default to "sip.twilio.com".
     */
    fromDomainSid?: string;
    /**
     * The unique string that that we created to identify the BYOC Trunk resource.
     */
    sid?: string;
    /**
     * The HTTP method we use to call `status_callback_url`. Either `GET` or `POST`.
     */
    statusCallbackMethod?: VoiceV1ByocTrunkStatusCallbackMethodEnum;
    /**
     * The URL that we call to pass status parameters (such as call ended) to your application.
     */
    statusCallbackUrl?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * The HTTP method we use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: VoiceV1ByocTrunkVoiceFallbackMethodEnum;
    /**
     * The URL that we call when an error occurs while retrieving or executing the TwiML requested from `voice_url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we use to call `voice_url`. Can be: `GET` or `POST`.
     */
    voiceMethod?: VoiceV1ByocTrunkVoiceMethodEnum;
    /**
     * The URL we call using the `voice_method` when the BYOC Trunk receives a call.
     */
    voiceUrl?: string;
}
