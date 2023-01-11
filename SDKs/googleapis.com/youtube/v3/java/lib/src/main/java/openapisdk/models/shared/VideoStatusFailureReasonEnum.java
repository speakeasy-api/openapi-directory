package openapisdk.models.shared;


public enum VideoStatusFailureReasonEnum {
    CONVERSION("conversion"),
    INVALID_FILE("invalidFile"),
    EMPTY_FILE("emptyFile"),
    TOO_SMALL("tooSmall"),
    CODEC("codec"),
    UPLOAD_ABORTED("uploadAborted");

    public final String value;

    private VideoStatusFailureReasonEnum(String value) {
        this.value = value;
    }
}
