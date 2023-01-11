package openapisdk.models.shared;


public enum CloneJobStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED"),
    CANCELLED("CANCELLED"),
    CANCELLING("CANCELLING"),
    ADAPTING_OS("ADAPTING_OS");

    public final String value;

    private CloneJobStateEnum(String value) {
        this.value = value;
    }
}
