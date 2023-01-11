package openapisdk.models.shared;


public enum BackfillJobStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    NOT_STARTED("NOT_STARTED"),
    PENDING("PENDING"),
    ACTIVE("ACTIVE"),
    STOPPED("STOPPED"),
    FAILED("FAILED"),
    COMPLETED("COMPLETED"),
    UNSUPPORTED("UNSUPPORTED");

    public final String value;

    private BackfillJobStateEnum(String value) {
        this.value = value;
    }
}
