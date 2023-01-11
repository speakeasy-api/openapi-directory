package openapisdk.models.shared;


public enum StreamStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATED("CREATED"),
    RUNNING("RUNNING"),
    PAUSED("PAUSED"),
    MAINTENANCE("MAINTENANCE"),
    FAILED("FAILED"),
    FAILED_PERMANENTLY("FAILED_PERMANENTLY"),
    STARTING("STARTING"),
    DRAINING("DRAINING");

    public final String value;

    private StreamStateEnum(String value) {
        this.value = value;
    }
}
