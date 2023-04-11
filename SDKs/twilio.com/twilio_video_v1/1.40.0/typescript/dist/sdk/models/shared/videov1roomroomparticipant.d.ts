import { SpeakeasyBase } from "../../../internal/utils";
import { RoomParticipantEnumStatusEnum } from "./roomparticipantenumstatusenum";
/**
 * OK
 */
export declare class VideoV1RoomRoomParticipant extends SpeakeasyBase {
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
     * The application-defined string that uniquely identifies the resource's User within a Room. If a client joins with an existing Identity, the existing client is disconnected. See [access tokens](https://www.twilio.com/docs/video/tutorials/user-identity-access-tokens) and [limits](https://www.twilio.com/docs/video/programmable-video-limits) for more info.
     */
    identity?: string;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
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
    status?: RoomParticipantEnumStatusEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
