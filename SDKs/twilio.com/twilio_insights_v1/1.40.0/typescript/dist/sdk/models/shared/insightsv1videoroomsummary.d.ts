import { SpeakeasyBase } from "../../../internal/utils";
import { VideoRoomSummaryEnumCodecEnum } from "./videoroomsummaryenumcodecenum";
import { VideoRoomSummaryEnumCreatedMethodEnum } from "./videoroomsummaryenumcreatedmethodenum";
import { VideoRoomSummaryEnumEdgeLocationEnum } from "./videoroomsummaryenumedgelocationenum";
import { VideoRoomSummaryEnumEndReasonEnum } from "./videoroomsummaryenumendreasonenum";
import { VideoRoomSummaryEnumProcessingStateEnum } from "./videoroomsummaryenumprocessingstateenum";
import { VideoRoomSummaryEnumRoomStatusEnum } from "./videoroomsummaryenumroomstatusenum";
import { VideoRoomSummaryEnumRoomTypeEnum } from "./videoroomsummaryenumroomtypeenum";
import { VideoRoomSummaryEnumTwilioRealmEnum } from "./videoroomsummaryenumtwiliorealmenum";
/**
 * HTTP method provided for status callback URL.
 */
export declare enum InsightsV1VideoRoomSummaryStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * OK
 */
export declare class InsightsV1VideoRoomSummary extends SpeakeasyBase {
    /**
     * Account SID associated with this room.
     */
    accountSid?: string;
    /**
     * Codecs used by participants in the room. Can be `VP8`, `H264`, or `VP9`.
     */
    codecs?: VideoRoomSummaryEnumCodecEnum[];
    /**
     * Actual number of concurrent participants.
     */
    concurrentParticipants?: number;
    /**
     * Creation time of the room.
     */
    createTime?: Date;
    createdMethod?: VideoRoomSummaryEnumCreatedMethodEnum;
    /**
     * Total room duration from create time to end time.
     */
    durationSec?: number;
    edgeLocation?: VideoRoomSummaryEnumEdgeLocationEnum;
    endReason?: VideoRoomSummaryEnumEndReasonEnum;
    /**
     * End time for the room.
     */
    endTime?: Date;
    /**
     * Room subresources.
     */
    links?: Record<string, any>;
    /**
     * Maximum number of participants allowed in the room at the same time allowed by the application settings.
     */
    maxConcurrentParticipants?: number;
    /**
     * Max number of total participants allowed by the application settings.
     */
    maxParticipants?: number;
    mediaRegion?: VideoRoomSummaryEnumTwilioRealmEnum;
    processingState?: VideoRoomSummaryEnumProcessingStateEnum;
    /**
     * Boolean indicating if recording is enabled for the room.
     */
    recordingEnabled?: boolean;
    /**
     * Room friendly name.
     */
    roomName?: string;
    /**
     * Unique identifier for the room.
     */
    roomSid?: string;
    roomStatus?: VideoRoomSummaryEnumRoomStatusEnum;
    roomType?: VideoRoomSummaryEnumRoomTypeEnum;
    /**
     * Webhook provided for status callbacks.
     */
    statusCallback?: string;
    /**
     * HTTP method provided for status callback URL.
     */
    statusCallbackMethod?: InsightsV1VideoRoomSummaryStatusCallbackMethodEnum;
    /**
     * Combined amount of participant time in the room.
     */
    totalParticipantDurationSec?: number;
    /**
     * Combined amount of recorded seconds for participants in the room.
     */
    totalRecordingDurationSec?: number;
    /**
     * Unique number of participant identities.
     */
    uniqueParticipantIdentities?: number;
    /**
     * Number of participants. May include duplicate identities for participants who left and rejoined.
     */
    uniqueParticipants?: number;
    /**
     * URL for the room resource.
     */
    url?: string;
}
