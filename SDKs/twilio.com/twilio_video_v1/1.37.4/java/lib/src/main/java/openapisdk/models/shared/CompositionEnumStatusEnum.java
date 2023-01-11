package openapisdk.models.shared;


public enum CompositionEnumStatusEnum {
    ENQUEUED("enqueued"),
    PROCESSING("processing"),
    COMPLETED("completed"),
    DELETED("deleted"),
    FAILED("failed");

    public final String value;

    private CompositionEnumStatusEnum(String value) {
        this.value = value;
    }
}
