package openapisdk.models.shared;


public enum StreamStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    NOT_STARTED("NOT_STARTED"),
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
