package openapisdk.models.shared;


public enum VolumeBackupFormatEnum {
    VOLUME_BACKUP_FORMAT_UNSPECIFIED("VOLUME_BACKUP_FORMAT_UNSPECIFIED"),
    GCE_PERSISTENT_DISK("GCE_PERSISTENT_DISK");

    public final String value;

    private VolumeBackupFormatEnum(String value) {
        this.value = value;
    }
}
