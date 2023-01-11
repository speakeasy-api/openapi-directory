package openapisdk.models.shared;


public enum VideoSuggestionsProcessingErrorsEnum {
    AUDIO_FILE("audioFile"),
    IMAGE_FILE("imageFile"),
    PROJECT_FILE("projectFile"),
    NOT_A_VIDEO_FILE("notAVideoFile"),
    DOC_FILE("docFile"),
    ARCHIVE_FILE("archiveFile"),
    UNSUPPORTED_SPATIAL_AUDIO_LAYOUT("unsupportedSpatialAudioLayout");

    public final String value;

    private VideoSuggestionsProcessingErrorsEnum(String value) {
        this.value = value;
    }
}
