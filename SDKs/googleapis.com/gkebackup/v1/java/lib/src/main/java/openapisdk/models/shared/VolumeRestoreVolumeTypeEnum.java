package openapisdk.models.shared;


public enum VolumeRestoreVolumeTypeEnum {
    VOLUME_TYPE_UNSPECIFIED("VOLUME_TYPE_UNSPECIFIED"),
    GCE_PERSISTENT_DISK("GCE_PERSISTENT_DISK");

    public final String value;

    private VolumeRestoreVolumeTypeEnum(String value) {
        this.value = value;
    }
}
