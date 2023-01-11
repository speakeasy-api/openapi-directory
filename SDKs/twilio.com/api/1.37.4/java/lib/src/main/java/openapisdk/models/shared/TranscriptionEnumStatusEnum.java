package openapisdk.models.shared;


public enum TranscriptionEnumStatusEnum {
    IN_PROGRESS("in-progress"),
    COMPLETED("completed"),
    FAILED("failed");

    public final String value;

    private TranscriptionEnumStatusEnum(String value) {
        this.value = value;
    }
}
