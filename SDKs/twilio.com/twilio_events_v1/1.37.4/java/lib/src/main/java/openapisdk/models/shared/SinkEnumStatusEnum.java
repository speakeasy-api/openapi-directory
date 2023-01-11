package openapisdk.models.shared;


public enum SinkEnumStatusEnum {
    INITIALIZED("initialized"),
    VALIDATING("validating"),
    ACTIVE("active"),
    FAILED("failed");

    public final String value;

    private SinkEnumStatusEnum(String value) {
        this.value = value;
    }
}
