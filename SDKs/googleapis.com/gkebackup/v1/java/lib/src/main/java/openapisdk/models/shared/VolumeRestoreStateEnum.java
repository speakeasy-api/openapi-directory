package openapisdk.models.shared;


public enum VolumeRestoreStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    RESTORING("RESTORING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    DELETING("DELETING");

    public final String value;

    private VolumeRestoreStateEnum(String value) {
        this.value = value;
    }
}
