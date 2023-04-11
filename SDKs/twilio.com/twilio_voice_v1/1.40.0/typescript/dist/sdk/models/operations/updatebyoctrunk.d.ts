import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateByocTrunkServerList: readonly ["https://voice.twilio.com"];
export declare class UpdateByocTrunkSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
 */
export declare enum UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum {
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
export declare enum UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum {
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
export declare enum UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateByocTrunkUpdateByocTrunkRequest extends SpeakeasyBase {
    /**
     * Whether Caller ID Name (CNAM) lookup is enabled for the trunk. If enabled, all inbound calls to the BYOC Trunk from the United States and Canada automatically perform a CNAM Lookup and display Caller ID data on your phone. See [CNAM Lookups](https://www.twilio.com/docs/sip-trunking#CNAM) for more information.
     */
    cnamLookupEnabled?: boolean;
    /**
     * The SID of the Connection Policy that Twilio will use when routing traffic to your communications infrastructure.
     */
    connectionPolicySid?: string;
    /**
     * A descriptive string that you create to describe the resource. It is not unique and can be up to 255 characters long.
     */
    friendlyName?: string;
    /**
     * The SID of the SIP Domain that should be used in the `From` header of originating calls sent to your SIP infrastructure. If your SIP infrastructure allows users to "call back" an incoming call, configure this with a [SIP Domain](https://www.twilio.com/docs/voice/api/sending-sip) to ensure proper routing. If not configured, the from domain will default to "sip.twilio.com".
     */
    fromDomainSid?: string;
    /**
     * The HTTP method we should use to call `status_callback_url`. Can be: `GET` or `POST`.
     */
    statusCallbackMethod?: UpdateByocTrunkUpdateByocTrunkRequestStatusCallbackMethodEnum;
    /**
     * The URL that we should call to pass status parameters (such as call ended) to your application.
     */
    statusCallbackUrl?: string;
    /**
     * The HTTP method we should use to call `voice_fallback_url`. Can be: `GET` or `POST`.
     */
    voiceFallbackMethod?: UpdateByocTrunkUpdateByocTrunkRequestVoiceFallbackMethodEnum;
    /**
     * The URL that we should call when an error occurs while retrieving or executing the TwiML requested by `voice_url`.
     */
    voiceFallbackUrl?: string;
    /**
     * The HTTP method we should use to call `voice_url`
     */
    voiceMethod?: UpdateByocTrunkUpdateByocTrunkRequestVoiceMethodEnum;
    /**
     * The URL we should call when the BYOC Trunk receives a call.
     */
    voiceUrl?: string;
}
export declare class UpdateByocTrunkRequest extends SpeakeasyBase {
    requestBody?: UpdateByocTrunkUpdateByocTrunkRequest;
    /**
     * The Twilio-provided string that uniquely identifies the BYOC Trunk resource to update.
     */
    sid: string;
}
export declare class UpdateByocTrunkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    voiceV1ByocTrunk?: shared.VoiceV1ByocTrunk;
}
