package openapisdk.models.shared;


public enum ExecutionStateEnum {
    UNKNOWN_STATE("unknownState"),
    PENDING("pending"),
    IN_PROGRESS("inProgress"),
    COMPLETE("complete");

    public final String value;

    private ExecutionStateEnum(String value) {
        this.value = value;
    }
}
