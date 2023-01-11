package openapisdk.models.shared;


public enum TaskStateEnum {
    PENDING("pending"),
    QUEUED("queued"),
    RUNNING("running"),
    TIMEDOUT("timedout"),
    COMPLETED("completed");

    public final String value;

    private TaskStateEnum(String value) {
        this.value = value;
    }
}
