package openapisdk.models.shared;


public enum RolloutStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    IN_PROGRESS("IN_PROGRESS"),
    PENDING_APPROVAL("PENDING_APPROVAL"),
    APPROVAL_REJECTED("APPROVAL_REJECTED"),
    PENDING("PENDING"),
    PENDING_RELEASE("PENDING_RELEASE");

    public final String value;

    private RolloutStateEnum(String value) {
        this.value = value;
    }
}
