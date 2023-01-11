package openapisdk.models.shared;


public enum ComputeEngineTargetDefaultsDiskTypeEnum {
    COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED("COMPUTE_ENGINE_DISK_TYPE_UNSPECIFIED"),
    COMPUTE_ENGINE_DISK_TYPE_STANDARD("COMPUTE_ENGINE_DISK_TYPE_STANDARD"),
    COMPUTE_ENGINE_DISK_TYPE_SSD("COMPUTE_ENGINE_DISK_TYPE_SSD"),
    COMPUTE_ENGINE_DISK_TYPE_BALANCED("COMPUTE_ENGINE_DISK_TYPE_BALANCED");

    public final String value;

    private ComputeEngineTargetDefaultsDiskTypeEnum(String value) {
        this.value = value;
    }
}
