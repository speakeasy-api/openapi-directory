package openapisdk.models.shared;


public enum WorkerPoolStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    RUNNING("RUNNING"),
    DELETING("DELETING"),
    DELETED("DELETED");

    public final String value;

    private WorkerPoolStateEnum(String value) {
        this.value = value;
    }
}
