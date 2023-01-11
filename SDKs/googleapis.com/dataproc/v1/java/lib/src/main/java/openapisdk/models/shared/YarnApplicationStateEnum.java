package openapisdk.models.shared;


public enum YarnApplicationStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    NEW_("NEW"),
    NEW_SAVING("NEW_SAVING"),
    SUBMITTED("SUBMITTED"),
    ACCEPTED("ACCEPTED"),
    RUNNING("RUNNING"),
    FINISHED("FINISHED"),
    FAILED("FAILED"),
    KILLED("KILLED");

    public final String value;

    private YarnApplicationStateEnum(String value) {
        this.value = value;
    }
}
