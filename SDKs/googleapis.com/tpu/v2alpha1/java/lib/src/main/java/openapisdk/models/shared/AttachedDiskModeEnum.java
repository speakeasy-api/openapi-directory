package openapisdk.models.shared;


public enum AttachedDiskModeEnum {
    DISK_MODE_UNSPECIFIED("DISK_MODE_UNSPECIFIED"),
    READ_WRITE("READ_WRITE"),
    READ_ONLY("READ_ONLY");

    public final String value;

    private AttachedDiskModeEnum(String value) {
        this.value = value;
    }
}
