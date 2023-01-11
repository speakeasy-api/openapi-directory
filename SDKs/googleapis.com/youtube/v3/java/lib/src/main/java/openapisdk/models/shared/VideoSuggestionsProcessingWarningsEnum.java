package openapisdk.models.shared;


public enum VideoSuggestionsProcessingWarningsEnum {
    UNKNOWN_CONTAINER("unknownContainer"),
    UNKNOWN_VIDEO_CODEC("unknownVideoCodec"),
    UNKNOWN_AUDIO_CODEC("unknownAudioCodec"),
    INCONSISTENT_RESOLUTION("inconsistentResolution"),
    HAS_EDITLIST("hasEditlist"),
    PROBLEMATIC_VIDEO_CODEC("problematicVideoCodec"),
    PROBLEMATIC_AUDIO_CODEC("problematicAudioCodec"),
    UNSUPPORTED_VR_STEREO_MODE("unsupportedVrStereoMode"),
    UNSUPPORTED_SPHERICAL_PROJECTION_TYPE("unsupportedSphericalProjectionType"),
    UNSUPPORTED_HDR_PIXEL_FORMAT("unsupportedHdrPixelFormat"),
    UNSUPPORTED_HDR_COLOR_METADATA("unsupportedHdrColorMetadata"),
    PROBLEMATIC_HDR_LOOKUP_TABLE("problematicHdrLookupTable");

    public final String value;

    private VideoSuggestionsProcessingWarningsEnum(String value) {
        this.value = value;
    }
}
