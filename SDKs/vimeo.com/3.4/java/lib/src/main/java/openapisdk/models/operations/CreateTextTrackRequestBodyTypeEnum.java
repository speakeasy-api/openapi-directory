package openapisdk.models.operations;


public enum CreateTextTrackRequestBodyTypeEnum {
    CAPTIONS("captions"),
    CHAPTERS("chapters"),
    DESCRIPTIONS("descriptions"),
    METADATA("metadata"),
    SUBTITLES("subtitles");

    public final String value;

    private CreateTextTrackRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
