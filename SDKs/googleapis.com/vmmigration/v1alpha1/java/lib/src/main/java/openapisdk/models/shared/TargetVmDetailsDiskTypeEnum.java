package openapisdk.models.shared;


public enum TargetVmDetailsDiskTypeEnum {
    DISK_TYPE_UNSPECIFIED("DISK_TYPE_UNSPECIFIED"),
    STANDARD("STANDARD"),
    BALANCED("BALANCED"),
    SSD("SSD");

    public final String value;

    private TargetVmDetailsDiskTypeEnum(String value) {
        this.value = value;
    }
}
