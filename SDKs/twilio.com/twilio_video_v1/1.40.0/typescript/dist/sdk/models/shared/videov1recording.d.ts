import { SpeakeasyBase } from "../../../internal/utils";
import { RecordingEnumCodecEnum } from "./recordingenumcodecenum";
import { RecordingEnumFormatEnum } from "./recordingenumformatenum";
import { RecordingEnumStatusEnum } from "./recordingenumstatusenum";
import { RecordingEnumTypeEnum } from "./recordingenumtypeenum";
/**
 * The HTTP method used to call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`.
 */
export declare enum VideoV1RecordingStatusCallbackMethodEnum {
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
export declare class VideoV1Recording extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording resource.
     */
    accountSid?: string;
    codec?: RecordingEnumCodecEnum;
    containerFormat?: RecordingEnumFormatEnum;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The duration of the recording in seconds rounded to the nearest second. Sub-second tracks have a `Duration` property of 1 second
     */
    duration?: number;
    /**
     * A list of SIDs related to the recording. Includes the `room_sid` and `participant_sid`.
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
     * The unique string that we created to identify the Recording resource.
     */
    sid?: string;
    /**
     * The size of the recorded track, in bytes.
     */
    size?: number;
    /**
     * The SID of the recording source. For a Room Recording, this value is a `track_sid`.
     */
    sourceSid?: string;
    status?: RecordingEnumStatusEnum;
    /**
     * The URL called using the `status_callback_method` to send status information on every recording event.
     */
    statusCallback?: string;
    /**
     * The HTTP method used to call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`.
     */
    statusCallbackMethod?: VideoV1RecordingStatusCallbackMethodEnum;
    /**
     * The name that was given to the source track of the recording. If no name is given, the `source_sid` is used.
     */
    trackName?: string;
    type?: RecordingEnumTypeEnum;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
}
