package openapisdk.models.shared;


public enum TaskStatusStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    ASSIGNED("ASSIGNED"),
    RUNNING("RUNNING"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED");

    public final String value;

    private TaskStatusStateEnum(String value) {
        this.value = value;
    }
}
