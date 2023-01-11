package openapisdk.models.shared;


public enum EnvironmentTargetingOptionDetailsEnvironmentEnum {
    ENVIRONMENT_UNSPECIFIED("ENVIRONMENT_UNSPECIFIED"),
    ENVIRONMENT_WEB_OPTIMIZED("ENVIRONMENT_WEB_OPTIMIZED"),
    ENVIRONMENT_WEB_NOT_OPTIMIZED("ENVIRONMENT_WEB_NOT_OPTIMIZED"),
    ENVIRONMENT_APP("ENVIRONMENT_APP");

    public final String value;

    private EnvironmentTargetingOptionDetailsEnvironmentEnum(String value) {
        this.value = value;
    }
}
