package openapisdk.models.shared;


public enum JobStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    ENABLED("ENABLED"),
    PAUSED("PAUSED"),
    DISABLED("DISABLED"),
    UPDATE_FAILED("UPDATE_FAILED");

    public final String value;

    private JobStateEnum(String value) {
        this.value = value;
    }
}
