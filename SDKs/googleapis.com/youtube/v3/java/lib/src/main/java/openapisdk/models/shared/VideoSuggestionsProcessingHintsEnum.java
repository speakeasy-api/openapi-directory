package openapisdk.models.shared;


public enum VideoSuggestionsProcessingHintsEnum {
    NON_STREAMABLE_MOV("nonStreamableMov"),
    SEND_BEST_QUALITY_VIDEO("sendBestQualityVideo"),
    SPHERICAL_VIDEO("sphericalVideo"),
    SPATIAL_AUDIO("spatialAudio"),
    VR_VIDEO("vrVideo"),
    HDR_VIDEO("hdrVideo");

    public final String value;

    private VideoSuggestionsProcessingHintsEnum(String value) {
        this.value = value;
    }
}
