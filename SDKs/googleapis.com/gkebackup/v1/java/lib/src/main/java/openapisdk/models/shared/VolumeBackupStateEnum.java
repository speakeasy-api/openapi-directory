package openapisdk.models.shared;


public enum VolumeBackupStateEnum {
    STATE_UNSPECIFIED("STATE_UNSPECIFIED"),
    CREATING("CREATING"),
    SNAPSHOTTING("SNAPSHOTTING"),
    UPLOADING("UPLOADING"),
    SUCCEEDED("SUCCEEDED"),
    FAILED("FAILED"),
    DELETING("DELETING");

    public final String value;

    private VolumeBackupStateEnum(String value) {
        this.value = value;
    }
}
