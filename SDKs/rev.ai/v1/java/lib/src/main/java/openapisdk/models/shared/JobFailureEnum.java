package openapisdk.models.shared;


public enum JobFailureEnum {
    INTERNAL_PROCESSING("internal_processing"),
    DOWNLOAD_FAILURE("download_failure"),
    DURATION_EXCEEDED("duration_exceeded"),
    DURATION_TOO_SHORT("duration_too_short"),
    INVALID_MEDIA("invalid_media"),
    EMPTY_MEDIA("empty_media"),
    TRANSCRIPTION("transcription"),
    INSUFFICIENT_BALANCE("insufficient_balance"),
    INVOICING_LIMIT_EXCEEDED("invoicing_limit_exceeded");

    public final String value;

    private JobFailureEnum(String value) {
        this.value = value;
    }
}
