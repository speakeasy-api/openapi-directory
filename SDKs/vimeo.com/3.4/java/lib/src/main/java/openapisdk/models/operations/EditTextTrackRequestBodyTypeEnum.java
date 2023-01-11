package openapisdk.models.operations;


public enum EditTextTrackRequestBodyTypeEnum {
    CAPTIONS("captions"),
    CHAPTERS("chapters"),
    DESCRIPTIONS("descriptions"),
    METADATA("metadata"),
    SUBTITLES("subtitles");

    public final String value;

    private EditTextTrackRequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
