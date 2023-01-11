package openapisdk.models.shared;


public enum InstanceDiskEncryptionEnum {
    DISK_ENCRYPTION_UNSPECIFIED("DISK_ENCRYPTION_UNSPECIFIED"),
    GMEK("GMEK"),
    CMEK("CMEK");

    public final String value;

    private InstanceDiskEncryptionEnum(String value) {
        this.value = value;
    }
}
