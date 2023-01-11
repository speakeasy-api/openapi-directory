package openapisdk.models.shared;


public enum BackupStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    DELETING("DELETING"),
    ACTIVE("ACTIVE"),
    FAILED("FAILED"),
    RESTORING("RESTORING");

    public final String value;

    private BackupStateEnum(String value) {
        this.value = value;
    }
}
