package openapisdk.models.shared;


public enum UpgradeInstanceInternalRequestTypeEnum {
    UPGRADE_TYPE_UNSPECIFIED("UPGRADE_TYPE_UNSPECIFIED"),
    UPGRADE_FRAMEWORK("UPGRADE_FRAMEWORK"),
    UPGRADE_OS("UPGRADE_OS"),
    UPGRADE_CUDA("UPGRADE_CUDA"),
    UPGRADE_ALL("UPGRADE_ALL");

    public final String value;

    private UpgradeInstanceInternalRequestTypeEnum(String value) {
        this.value = value;
    }
}
