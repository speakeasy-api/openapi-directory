import { SpeakeasyBase } from "../../../internal/utils";
export declare class VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules extends SpeakeasyBase {
    all?: boolean;
    kind?: string;
    priority?: string;
    publisher?: string;
    track?: string;
    type?: string;
}
/**
 * OK
 */
export declare class VideoV1RoomRoomParticipantRoomParticipantSubscribeRule extends SpeakeasyBase {
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the Participant resource for the Subscribe Rules.
     */
    participantSid?: string;
    /**
     * The SID of the Room resource for the Subscribe Rules
     */
    roomSid?: string;
    /**
     * A collection of Subscribe Rules that describe how to include or exclude matching tracks. See the [Specifying Subscribe Rules](https://www.twilio.com/docs/video/api/track-subscriptions#specifying-sr) section for further information.
     */
    rules?: VideoV1RoomRoomParticipantRoomParticipantSubscribeRuleRules[];
}
