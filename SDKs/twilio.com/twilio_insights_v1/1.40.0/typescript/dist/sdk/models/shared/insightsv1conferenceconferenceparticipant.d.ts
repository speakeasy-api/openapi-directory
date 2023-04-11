import { SpeakeasyBase } from "../../../internal/utils";
import { ConferenceParticipantEnumCallDirectionEnum } from "./conferenceparticipantenumcalldirectionenum";
import { ConferenceParticipantEnumCallStatusEnum } from "./conferenceparticipantenumcallstatusenum";
import { ConferenceParticipantEnumCallTypeEnum } from "./conferenceparticipantenumcalltypeenum";
import { ConferenceParticipantEnumJitterBufferSizeEnum } from "./conferenceparticipantenumjitterbuffersizeenum";
import { ConferenceParticipantEnumProcessingStateEnum } from "./conferenceparticipantenumprocessingstateenum";
import { ConferenceParticipantEnumRegionEnum } from "./conferenceparticipantenumregionenum";
/**
 * OK
 */
export declare class InsightsV1ConferenceConferenceParticipant extends SpeakeasyBase {
    /**
     * The unique SID identifier of the Account.
     */
    accountSid?: string;
    callDirection?: ConferenceParticipantEnumCallDirectionEnum;
    /**
     * Unique SID identifier of the call that generated the Participant resource.
     */
    callSid?: string;
    callStatus?: ConferenceParticipantEnumCallStatusEnum;
    callType?: ConferenceParticipantEnumCallTypeEnum;
    /**
     * Call SIDs coached by this participant.
     */
    coachedParticipants?: string[];
    conferenceRegion?: ConferenceParticipantEnumRegionEnum;
    /**
     * The unique SID identifier of the Conference.
     */
    conferenceSid?: string;
    /**
     * ISO alpha-2 country code of the participant based on caller ID or called number.
     */
    countryCode?: string;
    /**
     * Participant durations in seconds.
     */
    durationSeconds?: number;
    /**
     * Object containing information of actions taken by participants. Contains a dictionary of URL links to nested resources of this Conference Participant.
     */
    events?: any;
    /**
     * Caller ID of the calling party.
     */
    from?: string;
    /**
     * Boolean. Indicated whether participant was a coach.
     */
    isCoach?: boolean;
    /**
     * Boolean. Indicates whether participant had startConferenceOnEnter=true or endConferenceOnExit=true.
     */
    isModerator?: boolean;
    jitterBufferSize?: ConferenceParticipantEnumJitterBufferSizeEnum;
    /**
     * ISO 8601 timestamp of participant join event.
     */
    joinTime?: Date;
    /**
     * The user-specified label of this participant.
     */
    label?: string;
    /**
     * ISO 8601 timestamp of participant leave event.
     */
    leaveTime?: Date;
    /**
     * Object. Contains participant call quality metrics.
     */
    metrics?: any;
    /**
     * Add Participant API only. Estimated time in queue at call creation.
     */
    outboundQueueLength?: number;
    /**
     * Add Participant API only. Actual time in queue in seconds.
     */
    outboundTimeInQueue?: number;
    participantRegion?: ConferenceParticipantEnumRegionEnum;
    /**
     * SID for this participant.
     */
    participantSid?: string;
    processingState?: ConferenceParticipantEnumProcessingStateEnum;
    /**
     * Participant properties and metadata.
     */
    properties?: any;
    /**
     * Called party.
     */
    to?: string;
    /**
     * The URL of this resource.
     */
    url?: string;
}
