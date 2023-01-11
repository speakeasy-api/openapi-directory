package openapisdk.models.shared;


public enum RestoreStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    DELETING("DELETING");

    public final String value;

    private RestoreStateEnum(String value) {
        this.value = value;
    }
}
