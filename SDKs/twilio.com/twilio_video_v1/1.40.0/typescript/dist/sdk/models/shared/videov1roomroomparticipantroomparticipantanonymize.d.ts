import { SpeakeasyBase } from "../../../internal/utils";
import { RoomParticipantAnonymizeEnumStatusEnum } from "./roomparticipantanonymizeenumstatusenum";
/**
 * OK
 */
export declare class VideoV1RoomRoomParticipantRoomParticipantAnonymize extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the RoomParticipant resource.
     */
    accountSid?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The duration in seconds that the participant was `connected`. Populated only after the participant is `disconnected`.
     */
    duration?: number;
    /**
     * The time when the participant disconnected from the room in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
     */
    endTime?: Date;
    /**
     * The SID of the participant.
     */
    identity?: string;
    /**
     * The SID of the participant's room.
     */
    roomSid?: string;
    /**
     * The unique string that we created to identify the RoomParticipant resource.
     */
    sid?: string;
    /**
     * The time of participant connected to the room in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601#UTC) format.
     */
    startTime?: Date;
    status?: RoomParticipantAnonymizeEnumStatusEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
