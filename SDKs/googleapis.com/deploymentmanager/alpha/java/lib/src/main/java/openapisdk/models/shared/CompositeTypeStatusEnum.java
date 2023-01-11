package openapisdk.models.shared;


public enum CompositeTypeStatusEnum {
    UNKNOWN_STATUS("UNKNOWN_STATUS"),
    DEPRECATED("DEPRECATED"),
    EXPERIMENTAL("EXPERIMENTAL"),
    SUPPORTED("SUPPORTED");

    public final String value;

    private CompositeTypeStatusEnum(String value) {
        this.value = value;
    }
}
