import { SpeakeasyBase } from "../../../internal/utils";
import { RoomParticipantPublishedTrackEnumKindEnum } from "./roomparticipantpublishedtrackenumkindenum";
/**
 * OK
 */
export declare class VideoV1RoomRoomParticipantRoomParticipantPublishedTrack extends SpeakeasyBase {
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * Whether the track is enabled.
     */
    enabled?: boolean;
    kind?: RoomParticipantPublishedTrackEnumKindEnum;
    /**
     * The track name. Must be no more than 128 characters, and be unique among the participant's published tracks.
     */
    name?: string;
    /**
     * The SID of the Participant resource with the published track.
     */
    participantSid?: string;
    /**
     * The SID of the Room resource where the track is published.
     */
    roomSid?: string;
    /**
     * The unique string that we created to identify the RoomParticipantPublishedTrack resource.
     */
    sid?: string;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
