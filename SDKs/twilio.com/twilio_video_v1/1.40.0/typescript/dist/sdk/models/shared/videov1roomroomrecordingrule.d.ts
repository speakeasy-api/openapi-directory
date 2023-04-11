import { SpeakeasyBase } from "../../../internal/utils";
export declare class VideoV1RoomRoomRecordingRuleRules extends SpeakeasyBase {
    all?: boolean;
    kind?: string;
    publisher?: string;
    track?: string;
    type?: string;
}
/**
 * OK
 */
export declare class VideoV1RoomRoomRecordingRule extends SpeakeasyBase {
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * The SID of the Room resource for the Recording Rules
     */
    roomSid?: string;
    /**
     * A collection of Recording Rules that describe how to include or exclude matching tracks for recording
     */
    rules?: VideoV1RoomRoomRecordingRuleRules[];
}
