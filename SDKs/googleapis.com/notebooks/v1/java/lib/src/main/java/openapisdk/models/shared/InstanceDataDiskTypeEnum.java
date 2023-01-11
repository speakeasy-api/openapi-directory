package openapisdk.models.shared;


public enum InstanceDataDiskTypeEnum {
    DISK_TYPE_UNSPECIFIED("DISK_TYPE_UNSPECIFIED"),
    PD_STANDARD("PD_STANDARD"),
    PD_SSD("PD_SSD"),
    PD_BALANCED("PD_BALANCED"),
    PD_EXTREME("PD_EXTREME");

    public final String value;

    private InstanceDataDiskTypeEnum(String value) {
        this.value = value;
    }
}
