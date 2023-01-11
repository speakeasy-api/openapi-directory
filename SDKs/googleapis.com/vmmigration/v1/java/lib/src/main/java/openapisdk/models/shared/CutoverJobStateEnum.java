package openapisdk.models.shared;


public enum CutoverJobStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED"),
    CANCELLED("CANCELLED"),
    CANCELLING("CANCELLING"),
    ACTIVE("ACTIVE"),
    ADAPTING_OS("ADAPTING_OS");

    public final String value;

    private CutoverJobStateEnum(String value) {
        this.value = value;
    }
}
