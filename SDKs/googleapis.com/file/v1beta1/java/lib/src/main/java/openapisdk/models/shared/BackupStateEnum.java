package openapisdk.models.shared;


public enum BackupStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    FINALIZING("FINALIZING"),
    READY("READY"),
    DELETING("DELETING");

    public final String value;

    private BackupStateEnum(String value) {
        this.value = value;
    }
}
