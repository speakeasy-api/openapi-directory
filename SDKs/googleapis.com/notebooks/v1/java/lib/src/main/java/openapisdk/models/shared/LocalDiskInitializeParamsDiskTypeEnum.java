package openapisdk.models.shared;


public enum LocalDiskInitializeParamsDiskTypeEnum {
    DISK_TYPE_UNSPECIFIED("DISK_TYPE_UNSPECIFIED"),
    PD_STANDARD("PD_STANDARD"),
    PD_SSD("PD_SSD"),
    PD_BALANCED("PD_BALANCED"),
    PD_EXTREME("PD_EXTREME");

    public final String value;

    private LocalDiskInitializeParamsDiskTypeEnum(String value) {
        this.value = value;
    }
}
