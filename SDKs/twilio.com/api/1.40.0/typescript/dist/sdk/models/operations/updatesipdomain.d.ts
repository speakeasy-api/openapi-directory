import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateSipDomainServerList: readonly ["https://api.twilio.com"];
export declare class UpdateSipDomainSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `voice_url`
 */
export declare enum UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateSipDomainUpdateSipDomainRequest extends SpeakeasyBase {
    /**
     * The SID of the BYOC Trunk(Bring Your Own Carrier) resource that the Sip Domain will be associated with.
     */
    byocTrunkSid?: string;
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
     * A descriptive string that you created to describe the resource. It can be up to 64 characters long.
     */
    friendlyName?: string;
    /**
     * Whether secure SIP is enabled for the domain. If enabled, TLS will be enforced and SRTP will be negotiated on all incoming calls to this sip domain.
     */
    secure?: boolean;
    /**
     * Whether to allow SIP Endpoints to register with the domain to receive calls. Can be `true` or `false`. `true` allows SIP Endpoints to register with the domain to receive calls, `false` does not.
     */
    sipRegistration?: boolean;
    /**
     * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs while retrieving or executing the TwiML requested by `voice_url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we should use to call `voice_url`
     */
    voiceMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceMethodEnum;
    /**
     * The HTTP method we should use to call `voice_status_callback_url`. Can be: `GET` or `POST`.
     */
    voiceStatusCallbackMethod?: UpdateSipDomainUpdateSipDomainRequestVoiceStatusCallbackMethodEnum;
    /**
     * The URL that we should call to pass status parameters (such as call ended) to your application.
     */
    voiceStatusCallbackUrl?: string;
    /**
     * The URL we should call when the domain receives a call.
     */
    voiceUrl?: string;
}
export declare class UpdateSipDomainRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the SipDomain resource to update.
     */
    accountSid: string;
    requestBody?: UpdateSipDomainUpdateSipDomainRequest;
    /**
     * The Twilio-provided string that uniquely identifies the SipDomain resource to update.
     */
    sid: string;
}
export declare class UpdateSipDomainResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipDomain?: shared.ApiV2010AccountSipSipDomain;
}
