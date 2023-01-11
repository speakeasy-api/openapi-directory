package openapisdk.models.shared;


public enum BackupStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    IN_PROGRESS("IN_PROGRESS"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    DELETING("DELETING");

    public final String value;

    private BackupStateEnum(String value) {
        this.value = value;
    }
}
