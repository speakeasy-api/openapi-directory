import { SpeakeasyBase } from "../../../internal/utils";
import { CompositionEnumFormatEnum } from "./compositionenumformatenum";
import { CompositionEnumStatusEnum } from "./compositionenumstatusenum";
/**
 * The HTTP method used to call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`.
 */
export declare enum VideoV1CompositionStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
/**
 * Created
 */
export declare class VideoV1Composition extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Composition resource.
     */
    accountSid?: string;
    /**
     * The array of track names to include in the composition. The composition includes all audio sources specified in `audio_sources` except those specified in `audio_sources_excluded`. The track names in this property can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` includes tracks named `student` as well as `studentTeam`.
     */
    audioSources?: string[];
    /**
     * The array of track names to exclude from the composition. The composition includes all audio sources specified in `audio_sources` except for those specified in `audio_sources_excluded`. The track names in this property can include an asterisk as a wild card character, which matches zero or more characters in a track name. For example, `student*` excludes `student` as well as `studentTeam`. This parameter can also be empty.
     */
    audioSourcesExcluded?: string[];
    /**
     * The average bit rate of the composition's media.
     */
    bitrate?: number;
    /**
     * The date and time in GMT when the composition's media processing task finished, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCompleted?: Date;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the composition generated media was deleted, specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateDeleted?: Date;
    /**
     * The duration of the composition's media file in seconds.
     */
    duration?: number;
    format?: CompositionEnumFormatEnum;
    /**
     * The URL of the media file associated with the composition.
     */
    links?: Record<string, any>;
    /**
     * The URL of the media file associated with the composition when stored externally. See [External S3 Compositions](/docs/video/api/external-s3-compositions) for more details.
     */
    mediaExternalLocation?: string;
    /**
     * The dimensions of the video image in pixels expressed as columns (width) and rows (height). The string's format is `{width}x{height}`, such as `640x480`.
     */
    resolution?: string;
    /**
     * The SID of the Group Room that generated the audio and video tracks used in the composition. All media sources included in a composition must belong to the same Group Room.
     */
    roomSid?: string;
    /**
     * The unique string that we created to identify the Composition resource.
     */
    sid?: string;
    /**
     * The size of the composed media file in bytes.
     */
    size?: number;
    status?: CompositionEnumStatusEnum;
    /**
     * The URL called using the `status_callback_method` to send status information on every composition event.
     */
    statusCallback?: string;
    /**
     * The HTTP method used to call `status_callback`. Can be: `POST` or `GET`, defaults to `POST`.
     */
    statusCallbackMethod?: VideoV1CompositionStatusCallbackMethodEnum;
    /**
     * Whether to remove intervals with no media, as specified in the POST request that created the composition. Compositions with `trim` enabled are shorter when the Room is created and no Participant joins for a while as well as if all the Participants leave the room and join later, because those gaps will be removed. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
     */
    trim?: boolean;
    /**
     * The absolute URL of the resource.
     */
    url?: string;
    /**
     * An object that describes the video layout of the composition in terms of regions. See [Specifying Video Layouts](https://www.twilio.com/docs/video/api/compositions-resource#specifying-video-layouts) for more info.
     */
    videoLayout?: any;
}
