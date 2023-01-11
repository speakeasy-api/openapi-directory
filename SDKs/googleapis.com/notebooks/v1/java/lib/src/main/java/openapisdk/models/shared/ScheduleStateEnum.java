package openapisdk.models.shared;


public enum ScheduleStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ENABLED("ENABLED"),
    PAUSED("PAUSED"),
    DISABLED("DISABLED"),
    UPDATE_FAILED("UPDATE_FAILED"),
    INITIALIZING("INITIALIZING"),
    DELETING("DELETING");

    public final String value;

    private ScheduleStateEnum(String value) {
        this.value = value;
    }
}
