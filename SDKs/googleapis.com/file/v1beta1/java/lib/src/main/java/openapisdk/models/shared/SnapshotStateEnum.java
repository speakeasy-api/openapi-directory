package openapisdk.models.shared;


public enum SnapshotStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    READY("READY"),
    DELETING("DELETING");

    public final String value;

    private SnapshotStateEnum(String value) {
        this.value = value;
    }
}
