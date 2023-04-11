import { SpeakeasyBase } from "../../../internal/utils";
import { ParticipantEnumStatusEnum } from "./participantenumstatusenum";
/**
 * Created
 */
export declare class ApiV2010AccountConferenceParticipant extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Participant resource.
     */
    accountSid?: string;
    /**
     * The SID of the [Call](https://www.twilio.com/docs/voice/api/call-resource) the Participant resource is associated with.
     */
    callSid?: string;
    /**
     * The SID of the participant who is being `coached`. The participant being coached is the only participant who can hear the participant who is `coaching`.
     */
    callSidToCoach?: string;
    /**
     * Whether the participant is coaching another call. Can be: `true` or `false`. If not present, defaults to `false` unless `call_sid_to_coach` is defined. If `true`, `call_sid_to_coach` must be defined.
     */
    coaching?: boolean;
    /**
     * The SID of the conference the participant is in.
     */
    conferenceSid?: string;
    /**
     * The date and time in GMT that the resource was created specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateCreated?: string;
    /**
     * The date and time in GMT that the resource was last updated specified in [RFC 2822](https://www.ietf.org/rfc/rfc2822.txt) format.
     */
    dateUpdated?: string;
    /**
     * Whether the conference ends when the participant leaves. Can be: `true` or `false` and the default is `false`. If `true`, the conference ends and all other participants drop out when the participant leaves.
     */
    endConferenceOnExit?: boolean;
    /**
     * Whether the participant is on hold. Can be `true` or `false`.
     */
    hold?: boolean;
    /**
     * The user-specified label of this participant, if one was given when the participant was created. This may be used to fetch, update or delete the participant.
     */
    label?: string;
    /**
     * Whether the participant is muted. Can be `true` or `false`.
     */
    muted?: boolean;
    /**
     * Whether the conference starts when the participant joins the conference, if it has not already started. Can be: `true` or `false` and the default is `true`. If `false` and the conference has not started, the participant is muted and hears background music until another participant starts the conference.
     */
    startConferenceOnEnter?: boolean;
    status?: ParticipantEnumStatusEnum;
    /**
     * The URI of the resource, relative to `https://api.twilio.com`.
     */
    uri?: string;
}
