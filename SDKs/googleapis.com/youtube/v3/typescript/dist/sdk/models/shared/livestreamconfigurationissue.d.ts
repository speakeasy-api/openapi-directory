import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How severe this issue is to the stream.
 */
export declare enum LiveStreamConfigurationIssueSeverityEnum {
    Info = "info",
    Warning = "warning",
    Error = "error"
}
/**
 * The kind of error happening.
 */
export declare enum LiveStreamConfigurationIssueTypeEnum {
    GopSizeOver = "gopSizeOver",
    GopSizeLong = "gopSizeLong",
    GopSizeShort = "gopSizeShort",
    OpenGop = "openGop",
    BadContainer = "badContainer",
    AudioBitrateHigh = "audioBitrateHigh",
    AudioBitrateLow = "audioBitrateLow",
    AudioSampleRate = "audioSampleRate",
    BitrateHigh = "bitrateHigh",
    BitrateLow = "bitrateLow",
    AudioCodec = "audioCodec",
    VideoCodec = "videoCodec",
    NoAudioStream = "noAudioStream",
    NoVideoStream = "noVideoStream",
    MultipleVideoStreams = "multipleVideoStreams",
    MultipleAudioStreams = "multipleAudioStreams",
    AudioTooManyChannels = "audioTooManyChannels",
    InterlacedVideo = "interlacedVideo",
    FrameRateHigh = "frameRateHigh",
    ResolutionMismatch = "resolutionMismatch",
    VideoCodecMismatch = "videoCodecMismatch",
    VideoInterlaceMismatch = "videoInterlaceMismatch",
    VideoProfileMismatch = "videoProfileMismatch",
    VideoBitrateMismatch = "videoBitrateMismatch",
    FramerateMismatch = "framerateMismatch",
    GopMismatch = "gopMismatch",
    AudioSampleRateMismatch = "audioSampleRateMismatch",
    AudioStereoMismatch = "audioStereoMismatch",
    AudioCodecMismatch = "audioCodecMismatch",
    AudioBitrateMismatch = "audioBitrateMismatch",
    VideoResolutionSuboptimal = "videoResolutionSuboptimal",
    VideoResolutionUnsupported = "videoResolutionUnsupported",
    VideoIngestionStarved = "videoIngestionStarved",
    VideoIngestionFasterThanRealtime = "videoIngestionFasterThanRealtime"
}
export declare class LiveStreamConfigurationIssue extends SpeakeasyBase {
    /**
     * The long-form description of the issue and how to resolve it.
     */
    description?: string;
    /**
     * The short-form reason for this issue.
     */
    reason?: string;
    /**
     * How severe this issue is to the stream.
     */
    severity?: LiveStreamConfigurationIssueSeverityEnum;
    /**
     * The kind of error happening.
     */
    type?: LiveStreamConfigurationIssueTypeEnum;
}
