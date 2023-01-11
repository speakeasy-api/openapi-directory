package openapisdk.models.shared;


public enum VolumeSnapshotTypeEnum {
    SNAPSHOT_TYPE_UNSPECIFIED("SNAPSHOT_TYPE_UNSPECIFIED"),
    AD_HOC("AD_HOC"),
    SCHEDULED("SCHEDULED");

    public final String value;

    private VolumeSnapshotTypeEnum(String value) {
        this.value = value;
    }
}
