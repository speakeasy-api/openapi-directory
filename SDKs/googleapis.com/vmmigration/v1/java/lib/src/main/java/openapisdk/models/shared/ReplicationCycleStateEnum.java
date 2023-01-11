package openapisdk.models.shared;


public enum ReplicationCycleStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    RUNNING("RUNNING"),
    PAUSED("PAUSED"),
    FAILED("FAILED"),
    SUCCEEDED("SUCCEEDED");

    public final String value;

    private ReplicationCycleStateEnum(String value) {
        this.value = value;
    }
}
