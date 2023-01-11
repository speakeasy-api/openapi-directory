package openapisdk.models.shared;


public enum MessageNewTaskStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    ASSIGNED("ASSIGNED"),
    RUNNING("RUNNING"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED");

    public final String value;

    private MessageNewTaskStateEnum(String value) {
        this.value = value;
    }
}
