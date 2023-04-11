import { SpeakeasyBase } from "../../../internal/utils";
import { VideoSuggestionsTagSuggestion } from "./videosuggestionstagsuggestion";
export declare enum VideoSuggestionsEditorSuggestionsEnum {
    VideoAutoLevels = "videoAutoLevels",
    VideoStabilize = "videoStabilize",
    VideoCrop = "videoCrop",
    AudioQuietAudioSwap = "audioQuietAudioSwap"
}
export declare enum VideoSuggestionsProcessingErrorsEnum {
    AudioFile = "audioFile",
    ImageFile = "imageFile",
    ProjectFile = "projectFile",
    NotAVideoFile = "notAVideoFile",
    DocFile = "docFile",
    ArchiveFile = "archiveFile",
    UnsupportedSpatialAudioLayout = "unsupportedSpatialAudioLayout"
}
export declare enum VideoSuggestionsProcessingHintsEnum {
    NonStreamableMov = "nonStreamableMov",
    SendBestQualityVideo = "sendBestQualityVideo",
    SphericalVideo = "sphericalVideo",
    SpatialAudio = "spatialAudio",
    VrVideo = "vrVideo",
    HdrVideo = "hdrVideo"
}
export declare enum VideoSuggestionsProcessingWarningsEnum {
    UnknownContainer = "unknownContainer",
    UnknownVideoCodec = "unknownVideoCodec",
    UnknownAudioCodec = "unknownAudioCodec",
    InconsistentResolution = "inconsistentResolution",
    HasEditlist = "hasEditlist",
    ProblematicVideoCodec = "problematicVideoCodec",
    ProblematicAudioCodec = "problematicAudioCodec",
    UnsupportedVrStereoMode = "unsupportedVrStereoMode",
    UnsupportedSphericalProjectionType = "unsupportedSphericalProjectionType",
    UnsupportedHdrPixelFormat = "unsupportedHdrPixelFormat",
    UnsupportedHdrColorMetadata = "unsupportedHdrColorMetadata",
    ProblematicHdrLookupTable = "problematicHdrLookupTable"
}
/**
 * Specifies suggestions on how to improve video content, including encoding hints, tag suggestions, and editor suggestions.
 */
export declare class VideoSuggestions extends SpeakeasyBase {
    /**
     * A list of video editing operations that might improve the video quality or playback experience of the uploaded video.
     */
    editorSuggestions?: VideoSuggestionsEditorSuggestionsEnum[];
    /**
     * A list of errors that will prevent YouTube from successfully processing the uploaded video video. These errors indicate that, regardless of the video's current processing status, eventually, that status will almost certainly be failed.
     */
    processingErrors?: VideoSuggestionsProcessingErrorsEnum[];
    /**
     * A list of suggestions that may improve YouTube's ability to process the video.
     */
    processingHints?: VideoSuggestionsProcessingHintsEnum[];
    /**
     * A list of reasons why YouTube may have difficulty transcoding the uploaded video or that might result in an erroneous transcoding. These warnings are generated before YouTube actually processes the uploaded video file. In addition, they identify issues that are unlikely to cause the video processing to fail but that might cause problems such as sync issues, video artifacts, or a missing audio track.
     */
    processingWarnings?: VideoSuggestionsProcessingWarningsEnum[];
    /**
     * A list of keyword tags that could be added to the video's metadata to increase the likelihood that users will locate your video when searching or browsing on YouTube.
     */
    tagSuggestions?: VideoSuggestionsTagSuggestion[];
}
