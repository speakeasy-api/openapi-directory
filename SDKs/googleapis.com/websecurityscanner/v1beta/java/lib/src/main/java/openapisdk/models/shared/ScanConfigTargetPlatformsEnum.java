package openapisdk.models.shared;


public enum ScanConfigTargetPlatformsEnum {
    TARGET_PLATFORM_UNSPECIFIED("TARGET_PLATFORM_UNSPECIFIED"),
    APP_ENGINE("APP_ENGINE"),
    COMPUTE("COMPUTE"),
    CLOUD_RUN("CLOUD_RUN"),
    CLOUD_FUNCTIONS("CLOUD_FUNCTIONS");

    public final String value;

    private ScanConfigTargetPlatformsEnum(String value) {
        this.value = value;
    }
}
