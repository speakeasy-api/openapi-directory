package openapisdk.models.operations;


public enum CreateTextTrackAlt1RequestBodyTypeEnum {
    CAPTIONS("captions"),
    CHAPTERS("chapters"),
    DESCRIPTIONS("descriptions"),
    METADATA("metadata"),
    SUBTITLES("subtitles");

    public final String value;

    private CreateTextTrackAlt1RequestBodyTypeEnum(String value) {
        this.value = value;
    }
}
