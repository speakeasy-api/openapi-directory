import { SpeakeasyBase } from "../../../internal/utils";
import { VideoParticipantSummaryEnumCodecEnum } from "./videoparticipantsummaryenumcodecenum";
import { VideoParticipantSummaryEnumEdgeLocationEnum } from "./videoparticipantsummaryenumedgelocationenum";
import { VideoParticipantSummaryEnumRoomStatusEnum } from "./videoparticipantsummaryenumroomstatusenum";
import { VideoParticipantSummaryEnumTwilioRealmEnum } from "./videoparticipantsummaryenumtwiliorealmenum";
/**
 * OK
 */
export declare class InsightsV1VideoRoomSummaryVideoParticipantSummary extends SpeakeasyBase {
    /**
     * Account SID associated with the room.
     */
    accountSid?: string;
    /**
     * Codecs detected from the participant. Can be `VP8`, `H264`, or `VP9`.
     */
    codecs?: VideoParticipantSummaryEnumCodecEnum[];
    /**
     * Amount of time in seconds the participant was in the room.
     */
    durationSec?: number;
    edgeLocation?: VideoParticipantSummaryEnumEdgeLocationEnum;
    /**
     * Reason the participant left the room. See [the list of possible values here](https://www.twilio.com/docs/video/video-log-analyzer/video-log-analyzer-api#end_reason).
     */
    endReason?: string;
    /**
     * Errors encountered by the participant.
     */
    errorCode?: number;
    /**
     * Twilio error code dictionary link.
     */
    errorCodeUrl?: string;
    /**
     * When the participant joined the room.
     */
    joinTime?: Date;
    /**
     * When the participant left the room.
     */
    leaveTime?: Date;
    mediaRegion?: VideoParticipantSummaryEnumTwilioRealmEnum;
    /**
     * The application-defined string that uniquely identifies the participant within a Room.
     */
    participantIdentity?: string;
    /**
     * Unique identifier for the participant.
     */
    participantSid?: string;
    /**
     * Object containing information about the participant's data from the room. See [below](https://www.twilio.com/docs/video/video-log-analyzer/video-log-analyzer-api#properties) for more information.
     */
    properties?: any;
    /**
     * Object containing information about the SDK name and version. See [below](https://www.twilio.com/docs/video/video-log-analyzer/video-log-analyzer-api#publisher_info) for more information.
     */
    publisherInfo?: any;
    /**
     * Unique identifier for the room.
     */
    roomSid?: string;
    status?: VideoParticipantSummaryEnumRoomStatusEnum;
    /**
     * URL of the participant resource.
     */
    url?: string;
}
