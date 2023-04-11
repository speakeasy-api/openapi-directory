import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of audio track associated with the caption track.
 */
export declare enum CaptionSnippetAudioTrackTypeEnum {
    Unknown = "unknown",
    Primary = "primary",
    Commentary = "commentary",
    Descriptive = "descriptive"
}
/**
 * The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed.
 */
export declare enum CaptionSnippetFailureReasonEnum {
    UnknownFormat = "unknownFormat",
    UnsupportedFormat = "unsupportedFormat",
    ProcessingFailed = "processingFailed"
}
/**
 * The caption track's status.
 */
export declare enum CaptionSnippetStatusEnum {
    Serving = "serving",
    Syncing = "syncing",
    Failed = "failed"
}
/**
 * The caption track's type.
 */
export declare enum CaptionSnippetTrackKindEnum {
    Standard = "standard",
    Asr = "ASR",
    Forced = "forced"
}
/**
 * Basic details about a caption track, such as its language and name.
 */
export declare class CaptionSnippet extends SpeakeasyBase {
    /**
     * The type of audio track associated with the caption track.
     */
    audioTrackType?: CaptionSnippetAudioTrackTypeEnum;
    /**
     * The reason that YouTube failed to process the caption track. This property is only present if the state property's value is failed.
     */
    failureReason?: CaptionSnippetFailureReasonEnum;
    /**
     * Indicates whether YouTube synchronized the caption track to the audio track in the video. The value will be true if a sync was explicitly requested when the caption track was uploaded. For example, when calling the captions.insert or captions.update methods, you can set the sync parameter to true to instruct YouTube to sync the uploaded track to the video. If the value is false, YouTube uses the time codes in the uploaded caption track to determine when to display captions.
     */
    isAutoSynced?: boolean;
    /**
     * Indicates whether the track contains closed captions for the deaf and hard of hearing. The default value is false.
     */
    isCC?: boolean;
    /**
     * Indicates whether the caption track is a draft. If the value is true, then the track is not publicly visible. The default value is false. @mutable youtube.captions.insert youtube.captions.update
     */
    isDraft?: boolean;
    /**
     * Indicates whether caption track is formatted for "easy reader," meaning it is at a third-grade level for language learners. The default value is false.
     */
    isEasyReader?: boolean;
    /**
     * Indicates whether the caption track uses large text for the vision-impaired. The default value is false.
     */
    isLarge?: boolean;
    /**
     * The language of the caption track. The property value is a BCP-47 language tag.
     */
    language?: string;
    /**
     * The date and time when the caption track was last updated.
     */
    lastUpdated?: Date;
    /**
     * The name of the caption track. The name is intended to be visible to the user as an option during playback.
     */
    name?: string;
    /**
     * The caption track's status.
     */
    status?: CaptionSnippetStatusEnum;
    /**
     * The caption track's type.
     */
    trackKind?: CaptionSnippetTrackKindEnum;
    /**
     * The ID that YouTube uses to uniquely identify the video associated with the caption track. @mutable youtube.captions.insert
     */
    videoId?: string;
}
