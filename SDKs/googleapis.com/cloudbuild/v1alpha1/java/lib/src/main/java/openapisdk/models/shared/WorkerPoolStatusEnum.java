package openapisdk.models.shared;


public enum WorkerPoolStatusEnum {
    STATUS_UNSPECIFIED("STATUS_UNSPECIFIED"),
    CREATING("CREATING"),
    RUNNING("RUNNING"),
    DELETING("DELETING"),
    DELETED("DELETED");

    public final String value;

    private WorkerPoolStatusEnum(String value) {
        this.value = value;
    }
}
