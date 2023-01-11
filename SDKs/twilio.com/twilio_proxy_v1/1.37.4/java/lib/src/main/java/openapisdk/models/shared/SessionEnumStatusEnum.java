package openapisdk.models.shared;


public enum SessionEnumStatusEnum {
    OPEN("open"),
    IN_PROGRESS("in-progress"),
    CLOSED("closed"),
    FAILED("failed"),
    UNKNOWN("unknown");

    public final String value;

    private SessionEnumStatusEnum(String value) {
        this.value = value;
    }
}
