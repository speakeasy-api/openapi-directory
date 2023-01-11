package openapisdk.models.shared;


public enum QueueStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    RUNNING("RUNNING"),
    PAUSED("PAUSED"),
    DISABLED("DISABLED");

    public final String value;

    private QueueStateEnum(String value) {
        this.value = value;
    }
}
