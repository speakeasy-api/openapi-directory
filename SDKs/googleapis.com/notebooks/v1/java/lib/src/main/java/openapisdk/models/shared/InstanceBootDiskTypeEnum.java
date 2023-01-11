package openapisdk.models.shared;


public enum InstanceBootDiskTypeEnum {
    DISK_TYPE_UNSPECIFIED("DISK_TYPE_UNSPECIFIED"),
    PD_STANDARD("PD_STANDARD"),
    PD_SSD("PD_SSD"),
    PD_BALANCED("PD_BALANCED"),
    PD_EXTREME("PD_EXTREME");

    public final String value;

    private InstanceBootDiskTypeEnum(String value) {
        this.value = value;
    }
}
