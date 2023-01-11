package openapisdk.models.shared;


public enum JobStatusStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    PENDING("PENDING"),
    SETUP_DONE("SETUP_DONE"),
    RUNNING("RUNNING"),
    CANCEL_PENDING("CANCEL_PENDING"),
    CANCEL_STARTED("CANCEL_STARTED"),
    CANCELLED("CANCELLED"),
    DONE("DONE"),
    ERROR("ERROR"),
    ATTEMPT_FAILURE("ATTEMPT_FAILURE");

    public final String value;

    private JobStatusStateEnum(String value) {
        this.value = value;
    }
}
