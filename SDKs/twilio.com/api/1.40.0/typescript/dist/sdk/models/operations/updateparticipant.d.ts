import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateParticipantServerList: readonly ["https://api.twilio.com"];
export declare class UpdateParticipantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `announce_url`. Can be: `GET` or `POST` and defaults to `POST`.
 */
export declare enum UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `hold_url`. Can be: `GET` or `POST` and the default is `GET`.
 */
export declare enum UpdateParticipantUpdateParticipantRequestHoldMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
 */
export declare enum UpdateParticipantUpdateParticipantRequestWaitMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class UpdateParticipantUpdateParticipantRequest extends SpeakeasyBase {
    /**
     * The HTTP method we should use to call `announce_url`. Can be: `GET` or `POST` and defaults to `POST`.
     */
    announceMethod?: UpdateParticipantUpdateParticipantRequestAnnounceMethodEnum;
    /**
     * The URL we call using the `announce_method` for an announcement to the participant. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
     */
    announceUrl?: string;
    /**
     * Whether to play a notification beep to the conference when the participant exits. Can be: `true` or `false`.
     */
    beepOnExit?: boolean;
    /**
     * The SID of the participant who is being `coached`. The participant being coached is the only participant who can hear the participant who is `coaching`.
     */
    callSidToCoach?: string;
    /**
     * Whether the participant is coaching another call. Can be: `true` or `false`. If not present, defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must be defined.
     */
    coaching?: boolean;
    /**
     * Whether to end the conference when the participant leaves. Can be: `true` or `false` and defaults to `false`.
     */
    endConferenceOnExit?: boolean;
    /**
     * Whether the participant should be on hold. Can be: `true` or `false`. `true` puts the participant on hold, and `false` lets them rejoin the conference.
     */
    hold?: boolean;
    /**
     * The HTTP method we should use to call `hold_url`. Can be: `GET` or `POST` and the default is `GET`.
     */
    holdMethod?: UpdateParticipantUpdateParticipantRequestHoldMethodEnum;
    /**
     * The URL we call using the `hold_method` for music that plays when the participant is on hold. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs.
     */
    holdUrl?: string;
    /**
     * Whether the participant should be muted. Can be `true` or `false`. `true` will mute the participant, and `false` will un-mute them. Anything value other than `true` or `false` is interpreted as `false`.
     */
    muted?: boolean;
    /**
     * The HTTP method we should use to call `wait_url`. Can be `GET` or `POST` and the default is `POST`. When using a static audio file, this should be `GET` so that we can cache the file.
     */
    waitMethod?: UpdateParticipantUpdateParticipantRequestWaitMethodEnum;
    /**
     * The URL we call using the `wait_method` for the music to play while participants are waiting for the conference to start. The URL may return an MP3 file, a WAV file, or a TwiML document that contains `<Play>`, `<Say>`, `<Pause>`, or `<Redirect>` verbs. The default value is the URL of our standard hold music. [Learn more about hold music](https://www.twilio.com/labs/twimlets/holdmusic).
     */
    waitUrl?: string;
}
export declare class UpdateParticipantRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resources to update.
     */
    accountSid: string;
    /**
     * The [Call](https://www.twilio.com/docs/voice/api/call-resource) SID or label of the participant to update. Non URL safe characters in a label must be percent encoded, for example, a space character is represented as %20.
     */
    callSid: string;
    /**
     * The SID of the conference with the participant to update.
     */
    conferenceSid: string;
    requestBody?: UpdateParticipantUpdateParticipantRequest;
}
export declare class UpdateParticipantResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountConferenceParticipant?: shared.ApiV2010AccountConferenceParticipant;
}
