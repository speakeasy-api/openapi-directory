import { SpeakeasyBase } from "../../../internal/utils";
import { RoomRecordingEnumCodecEnum } from "./roomrecordingenumcodecenum";
import { RoomRecordingEnumFormatEnum } from "./roomrecordingenumformatenum";
import { RoomRecordingEnumStatusEnum } from "./roomrecordingenumstatusenum";
import { RoomRecordingEnumTypeEnum } from "./roomrecordingenumtypeenum";
/**
 * OK
 */
export declare class VideoV1RoomRoomRecording extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the RoomRecording resource.
     */
    accountSid?: string;
    codec?: RoomRecordingEnumCodecEnum;
    containerFormat?: RoomRecordingEnumFormatEnum;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The duration of the recording rounded to the nearest second. Sub-second duration tracks have a `duration` of 1 second
     */
    duration?: number;
    /**
     * A list of SIDs related to the Recording. Includes the `room_sid` and `participant_sid`.
     */
    groupingSids?: any;
    /**
     * The URLs of related resources.
     */
    links?: Record<string, any>;
    /**
     * The URL of the media file associated with the recording when stored externally. See [External S3 Recordings](/docs/video/api/external-s3-recordings) for more details.
     */
    mediaExternalLocation?: string;
    /**
     * The time in milliseconds elapsed between an arbitrary point in time, common to all group rooms, and the moment when the source room of this track started. This information provides a synchronization mechanism for recordings belonging to the same room.
     */
    offset?: number;
    /**
     * The SID of the Room resource the recording is associated with.
     */
    roomSid?: string;
    /**
     * The unique string that we created to identify the RoomRecording resource.
     */
    sid?: string;
    /**
     * The size of the recorded track in bytes.
     */
    size?: number;
    /**
     * The SID of the recording source. For a Room Recording, this value is a `track_sid`.
     */
    sourceSid?: string;
    status?: RoomRecordingEnumStatusEnum;
    /**
     * The name that was given to the source track of the recording. If no name is given, the `source_sid` is used.
     */
    trackName?: string;
    type?: RoomRecordingEnumTypeEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
